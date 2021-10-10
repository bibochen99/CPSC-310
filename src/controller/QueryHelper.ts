

import * as fs from "fs-extra";
import {InsightError} from "./IInsightFacade";
import FilterHelper from "./FilterHelper";
import OptionHelper from "./OptionHelper";
import MultipleDatasetsCheck from "./MultipleDatasetsCheck";

export default class QueryHelper {
	private possibleQueryKey: any[] = ["WHERE", "OPTIONS"];
	private mKey: string[] = ["courses_avg", "courses_pass", "courses_fail", "courses_audit",
		"courses_year","avg", "pass", "fail", "audit", "year"];

	private addedDataset: any;
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
		let queryKeys: any [];

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
		if(queryObject["OPTIONS"] === undefined){
			return false;
		}
		return true;
	}

	public checkValidInsideWhere(query: any) {
		let queryObject = query;
		let queryKeys: any [];
		let whereQuery = queryObject["WHERE"];

		if(Object.keys(query.WHERE).length === 0){
			return true;
		}
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
		if(!(filterList.includes(filter))){
			console.log("invalid filter name");
			return false;
		}
		return true;
	}


	public referencesMultipleDatasets(query: any) {
		let md: MultipleDatasetsCheck = new MultipleDatasetsCheck();
		return md.check(query);
	}


	public getQueryRequestKey2(query: any, loadedData: any): any[] {

		let inputQuery = query;
		let inside = inputQuery["WHERE"];
		let result: any[] = [];
		let temp: any[] = [];
		if(Object.keys(query.WHERE).length === 0){
			result = [];
			result.push(loadedData);
			this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "AND")){
			this.loopIntoWhere(inside.AND, result,temp);
			let otherTemp = this.filterHelper.applyAndFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "OR")){
			this.loopIntoWhere(inside.OR, result,temp);
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

			this.temp = this.filterHelper.applyISFilter(inside.IS,result);

		} else if(Object.prototype.hasOwnProperty.call(inside, "NOT")){
			// let cast: any[] = [];
			// cast.push(inside.NOT);
			// this.loopIntoWhere(cast, result,temp);
			// let otherTemp = this.filterHelper.applyNOTFilter(this.temp);
			// result = [];
			// result.push(otherTemp);
			// this.temp = result;


		} else if(Object.prototype.hasOwnProperty.call(inside, "EQ")){
			// console.log("145");
			this.temp = this.filterHelper.applyEQFilter(inside.EQ,result);
			// console.log("146");
		} else if(Object.prototype.hasOwnProperty.call(inside, "GT")){
			this.temp = this.filterHelper.applyGTFilter(inside.GT,result);
		} else if(Object.prototype.hasOwnProperty.call(inside, "LT")){
			this.temp = this.filterHelper.applyLTFilter(inside.LT,result);
		}else{
			throw new InsightError("not such key.");
		}

		return this.temp;
	}

	public loopIntoWhere(value: any, result: any[],temp: any[]) {
		temp = [];
		for(let nestedValue of value){
			if(Object.prototype.hasOwnProperty.call(nestedValue, "AND")){
				this.loopIntoWhere(nestedValue.AND, result,temp);
				let otherTemp = this.filterHelper.applyAndFilter(result);
				result = [];
				result.push(otherTemp);
				this.temp = result;

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "OR")){
				this.loopIntoWhere(nestedValue.OR, result,temp);
				let otherTemp = this.filterHelper.applyOrFilter(result);
				result = [];
				result.push(otherTemp);
				this.temp = result;


			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "IS")){
				this.filterHelper.applyISFilter(nestedValue.IS,result);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "NOT")){


				// let cast: any[] = [];
				// cast.push(nestedValue.NOT);
				// this.loopIntoWhere(cast, result,temp);
				// let otherTemp = this.filterHelper.applyNOTFilter(this.temp);
				// result = [];
				// result.push(otherTemp);
				// this.temp = result;

			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "EQ")){
				this.filterHelper.applyEQFilter(nestedValue.EQ,result);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "GT")){
				this.filterHelper.applyGTFilter(nestedValue.GT,result);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "LT")){
				this.filterHelper.applyLTFilter(nestedValue.LT,result);
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
