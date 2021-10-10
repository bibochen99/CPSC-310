import {InsightError} from "./IInsightFacade";
import FilterHelper from "./FilterHelper";
import MultipleDatasetsCheck from "./MultipleDatasetsCheck";

export default class QueryHelper {
	private mKey: string[] = ["courses_avg", "courses_pass", "courses_fail", "courses_audit",
		"courses_year","avg", "pass", "fail", "audit", "year"];

	private readonly addedDataset: any;
	private temp: any;
	private filterHelper: FilterHelper;

	constructor( loadedData: any){

		this.addedDataset = loadedData;
		this.temp = [];
		this.filterHelper = new FilterHelper(this.temp,this.addedDataset);
	}


	public queryTooLong(result: any) {
		return (result.length > 5000);
	}

	public invalidQuery(query: any) {
		let queryObject = query;
		if(queryObject["WHERE"] === undefined){
			return false;
		}
		if(queryObject["WHERE"] === null){
			return false;
		}


		if(!(this.checkValidInsideWhere(query))){
			return false;
		}

		if(query.OPTIONS === undefined){
			return false;
		}
		if(queryObject["OPTIONS"] === null){
			return false;
		}
		return queryObject["OPTIONS"] !== undefined;

	}

	public checkValidInsideWhere(query: any) {
		let whereQuery = query["WHERE"];

		// if(Object.keys(query.WHERE).length === 0){
		// 	return true;
		// }
	// inside where
		let insideWhereKey = Object.keys(whereQuery);

		if(Object.keys(query.WHERE).length > 1){
			// console.log("WHERE has more object inside");
			return false;
		}


		let key = Object.keys(insideWhereKey);
		let filter = insideWhereKey[0];
		let filterList = ["AND","OR","NOT","IS","EQ","LT","GT","NOT"];
		if(key.length === 0){
		// console.log("nothing inside the WHERE");
			return false;
		}
		return filterList.includes(filter);

	}


	public referencesMultipleDatasets(query: any): boolean{
		let md: MultipleDatasetsCheck = new MultipleDatasetsCheck();
		return md.check(query);
	}


	public getQueryRequestKey2(query: any): any[] {

		let inside = query["WHERE"];
		let result: any[] = [];
		let check: boolean = true;
		if(Object.prototype.hasOwnProperty.call(inside, "AND")){
			this.loopIntoWhere(inside.AND, result,check);
			let otherTemp = this.filterHelper.applyAndFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "OR")){
			check = true;
			this.loopIntoWhere(inside.OR, result, check);
			let otherTemp = this.filterHelper.applyOrFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;

			// this.loopIntoWhere(inside.OR, result,temp);
			// let otherTemp = this.filterHelper.applyOrFilter(this.temp);
			// result = [];
			// result.push(otherTemp);
			// this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "IS")){

			this.temp = this.filterHelper.applyISFilter(inside.IS,result,check);

		} else if(Object.prototype.hasOwnProperty.call(inside, "NOT")){
			check = true;
			let cast: any[] = [];
			cast.push(inside.NOT);
			this.loopIntoWhere(cast, result, check);
			let otherTemp = this.filterHelper.applyNOTFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;


		} else if(Object.prototype.hasOwnProperty.call(inside, "EQ")){

			this.temp = this.filterHelper.applyEQFilter(inside.EQ,result,check);

		} else if(Object.prototype.hasOwnProperty.call(inside, "GT")){
			this.temp = this.filterHelper.applyGTFilter(inside.GT,result,check);
		} else if(Object.prototype.hasOwnProperty.call(inside, "LT")){
			this.temp = this.filterHelper.applyLTFilter(inside.LT,result,check);
		}else{
			throw new InsightError("not such key.");
		}

		return this.temp;
	}

	public loopIntoWhere(value: any, result: any[], check: boolean) {
		for(let nestedValue of value){
			if(Object.prototype.hasOwnProperty.call(nestedValue, "AND")){
				this.loopIntoWhere(nestedValue.AND, result, check);
				let otherTemp = this.filterHelper.applyAndFilter(result);
				result = [];
				result.push(otherTemp);
				this.temp = result;

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "OR")){
				this.loopIntoWhere(nestedValue.OR, result,check);
				let otherTemp = this.filterHelper.applyOrFilter(result);
				result = [];
				result.push(otherTemp);
				this.temp = result;


			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "IS")){
				this.filterHelper.applyISFilter(nestedValue.IS, result, check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "NOT")){
				// // console.log("193");
				// this.loopIntoWhere(nestedValue.NOT, result,temp);
				// let otherTemp = this.filterHelper.applyNOTFilter(temp);
				// result = [];
				// result.push(otherTemp);
				// this.temp = result;

				let cast: any[] = [];
				cast.push(nestedValue.NOT);
				this.loopIntoWhere(cast, result,check);
				let otherTemp = this.filterHelper.applyNOTFilter(this.temp);
				result = [];
				result.push(otherTemp);
				this.temp = result;

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "EQ")){
				this.filterHelper.applyEQFilter(nestedValue.EQ, result, check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "GT")){
				this.filterHelper.applyGTFilter(nestedValue.GT, result, check);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "LT")){
				this.filterHelper.applyLTFilter(nestedValue.LT, result, check);
			}else{
				throw new InsightError("not such key after and/or.");
			}
		}
	}


	public applyOptional(query: any, resultSoFar: any): any[] {

		let allKey = ["courses_dept", "courses_id", "courses_instructor", "courses_title",
			"courses_uuid","courses_avg", "courses_pass", "courses_fail", "courses_audit", "courses_year"];
		let keep = query["OPTIONS"]["COLUMNS"];
		let remove = [];
		for (let each of allKey){
			if(!keep.includes(each)){
				remove.push(each);
			}
		}

		for (let each of resultSoFar){
			for (let nested of remove){
				delete each[nested];
			}
		}

		if(query["OPTIONS"]["ORDER"] === undefined){
			return resultSoFar;
		}

		let order = query["OPTIONS"]["ORDER"];


		resultSoFar.sort((a: any, b: any) =>{
			if(this.mKey.includes(order)){
				return a[order] - b[order];
			}else{
				if (a[order] < b[order]) {
					return -1;
				}
				if (a[order] > b[order]) {
					return 1;
				}
				return 0;
			}
		});

		return resultSoFar;
	}


}
