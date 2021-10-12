export default class MultipleDatasetsCheck {
	public valid: boolean;
	public id: string;

	constructor() {
		this.valid = true;
		this.id = "";
	}
	public check(query: any,id: string){
		let result: any[] = [];
		let inside = query["WHERE"];
		let temp: any[] = [];
		let check = false;
		this.id = id;
		if(Object.prototype.hasOwnProperty.call(inside, "AND")){
			check = this.loopIntoWhere(inside.AND, result,temp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "OR")){
			check = this.loopIntoWhere(inside.OR, result,temp);

		} else if(Object.prototype.hasOwnProperty.call(inside, "IS")){

			return false;

		} else if(Object.prototype.hasOwnProperty.call(inside, "NOT")){
			let cast: any[] = [];
			cast.push(inside.NOT);
			this.loopIntoWhere(cast, result,temp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "EQ")){
			// console.log("145");
			return false;
			// console.log("146");
		} else if(Object.prototype.hasOwnProperty.call(inside, "GT")){
			return false;
		} else if(Object.prototype.hasOwnProperty.call(inside, "LT")){
			return false;
		}
		return check;

	}
	public loopIntoWhere(value: any, result: any[],temp: any[]): boolean {
		temp = [];
		let check = false;
		for(let nestedValue of value){
			if(Object.prototype.hasOwnProperty.call(nestedValue, "AND")){
				this.loopIntoWhere(nestedValue.AND, result,temp);

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "OR")){
				this.loopIntoWhere(nestedValue.OR, result,temp);

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "IS")){
				check = this.applyLTFilter(nestedValue.IS,check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "NOT")){

				let cast: any[] = [];
				cast.push(nestedValue.NOT);
				this.loopIntoWhere(cast, result,temp);

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "EQ")){
				check = this.applyLTFilter(nestedValue.EQ,check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "GT")){
				check = this.applyLTFilter(nestedValue.GT,check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "LT")){
				check = this.applyLTFilter(nestedValue.LT,check);
			}else{
				return false;
			}
		}
		return check;
	}
	public applyLTFilter(LT: any, check: boolean): boolean {
		let string = Object.keys(LT)[0];// course_avg
		let iS = string.split("_")[0];
		if(iS !== this.id){
			check = true;
		}
		return check;

	}
}

