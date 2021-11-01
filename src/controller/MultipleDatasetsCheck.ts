import {InsightError} from "./IInsightFacade";

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
			if(!Array.isArray(inside.AND) || inside.AND.length === 0){
				throw new InsightError("AND problem");
			}
			if (Object.keys((query.WHERE.AND[0])).length !== 1) {
				throw new InsightError("AND problem");
			}
			MultipleDatasetsCheck.checkEmptyAndOR(inside.AND);
			check = this.loopIntoWhere(inside.AND, result,temp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "OR")){
			if(!Array.isArray(inside.OR) || inside.OR.length === 0){
				throw new InsightError("OR problem");
			}
			if (Object.keys((query.WHERE.OR[0])).length !== 1) {
				throw new InsightError("OR problem");
			}
			MultipleDatasetsCheck.checkEmptyAndOR(inside.OR);
			check = this.loopIntoWhere(inside.OR, result,temp);

		} else if(Object.prototype.hasOwnProperty.call(inside, "IS")){
			MultipleDatasetsCheck.checkEmpty(inside.IS);
			return false;

		} else if(Object.prototype.hasOwnProperty.call(inside, "NOT")){
			MultipleDatasetsCheck.checkEmpty(inside.NOT);
			if (Object.keys(inside.NOT).length !== 1) {
				throw new InsightError("NOT has more than one thing");
			}
			let cast: any[] = [];
			cast.push(inside.NOT);
			this.loopIntoWhere(cast, result,temp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "EQ")){
			MultipleDatasetsCheck.checkEmpty(inside.EQ);
			return false;
		} else if(Object.prototype.hasOwnProperty.call(inside, "GT")){
			MultipleDatasetsCheck.checkEmpty(inside.GT);
			return false;
		} else if(Object.prototype.hasOwnProperty.call(inside, "LT")){
			MultipleDatasetsCheck.checkEmpty(inside.LT);
			return false;
		}
		return check;

	}

	public loopIntoWhere(value: any, result: any[],temp: any[]): boolean {
		temp = [];
		let check = false;
		for(let nestedValue of value){
			if(Object.prototype.hasOwnProperty.call(nestedValue, "AND")){
				if (Object.keys((nestedValue.AND[0])).length !== 1) {
					throw new InsightError("NOT has more than one thing");
				}
				this.loopIntoWhere(nestedValue.AND, result,temp);

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "OR")){
				if (Object.keys((nestedValue.OR[0])).length !== 1) {
					throw new InsightError("NOT has more than one thing");
				}
				this.loopIntoWhere(nestedValue.OR, result,temp);

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "IS")){
				check = this.applyLTFilter(nestedValue.IS,check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "NOT")){
				if (Object.keys(nestedValue.NOT).length !== 1) {
					throw new InsightError("NOT has more than one thing");
				}
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

		if(!(string.includes("_") && string.split("_").length === 2)){
			throw (new InsightError("invalid string, contain more _"));
		}
		let iS = string.split("_")[0];
		if(iS !== this.id){
			// check = true;
			throw new InsightError("query on different dataset");

		}
		return check;

	}

	private static checkEmptyAndOR(inside: any) {
		if (inside.length === 0) {
			throw (new InsightError("empty inside and/or"));
		}
	}


	private static checkEmpty(inside: any) {
		if (Object.keys(inside).length === 0) {
			throw (new InsightError("empty inside not/eq/is/gt/lt"));
		}
	}
}

