import {InsightError, ResultTooLargeError} from "./IInsightFacade";

export default class CheckInvalid {

	private input: any[];
	constructor(){
		this.input = [];

	}


	public invalidQuery(query: any) {

		this.checkLengthOfQuery(query);
		let queryObject = query;
		if(queryObject.WHERE === undefined){
			return false;
		}
		if(queryObject["WHERE"] === null){
			return false;
		}
		if(Array.isArray(queryObject.WHERE)){
			return false;
		}

		if(!(this.checkValidInsideWhere(query))){
			return false;
		}
		let options = queryObject["OPTIONS"];

		if(query.OPTIONS === undefined){
			return false;
		}
		if(queryObject["OPTIONS"] === null){
			return false;
		}
		if (Object.keys(options).length !== 1 && Object.keys(options).length !== 2) {
			return false;
		}

		return queryObject["OPTIONS"] !== undefined;

	}

	public checkValidInsideWhere(query: any) {
		let whereQuery = query["WHERE"];
		if(Object.keys(whereQuery).length === 0){
			return true;
		}
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

	private checkLengthOfQuery(query: any) {
		if(query === null){
			throw new InsightError("query is null");
		}
		if(Object.keys(query).length === 3) {
			if(Object.prototype.hasOwnProperty.call(query, "WHERE")
				&& Object.prototype.hasOwnProperty.call(query, "OPTIONS")
				&& Object.prototype.hasOwnProperty.call(query, "TRANSFORMATIONS")){
				let temQuery = query;
			}else{
				throw new InsightError("length more than 3");
			}
		}else if(Object.keys(query).length === 2){
			if(Object.prototype.hasOwnProperty.call(query, "WHERE")
				&& Object.prototype.hasOwnProperty.call(query, "OPTIONS")){
				let temQuery = query;
			}else{
				throw new InsightError("query is null");
			}
		}else {
			throw new InsightError("length more than 2");
		}
	}
}
