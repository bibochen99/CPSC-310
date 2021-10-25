import {InsightError} from "./IInsightFacade";
import FilterHelper from "./FilterHelper";
import MultipleDatasetsCheck from "./MultipleDatasetsCheck";
import Transformation from "./Transformation";

export default class QueryHelper {
	private mKey: string[] = ["avg", "pass", "fail", "audit", "year"];

	private addedDataset: any;
	private temp: any;
	private filterHelper: FilterHelper;

	constructor(loadedData: any){

		this.addedDataset = loadedData;
		this.temp = [];
		this.filterHelper = new FilterHelper(this.temp,this.addedDataset);
	}


	public queryTooLong(result: any) {
		return (result.length > 5000);
	}

	public referencesMultipleDatasets(query: any,id: string): boolean{
		let md: MultipleDatasetsCheck = new MultipleDatasetsCheck();
		return md.check(query,id);
	}


	public performQuery(query: any): any[] {
		let inside = query["WHERE"];
		let result: any[] = [];
		if(Object.prototype.hasOwnProperty.call(inside, "AND")){
			this.loopIntoWhere(inside.AND, result);
			let otherTemp = this.filterHelper.applyAndFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "OR")){
			this.loopIntoWhere(inside.OR, result);
			let otherTemp = this.filterHelper.applyOrFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "IS")){
			this.temp = this.filterHelper.applyISFilter(inside.IS,result);
		} else if(Object.prototype.hasOwnProperty.call(inside, "NOT")){
			let cast: any[] = [];
			cast.push(inside.NOT);
			this.loopIntoWhere(cast, result);
			let otherTemp = this.filterHelper.applyNOTFilter(this.temp);
			result = [];
			result.push(otherTemp);
			this.temp = result;
		} else if(Object.prototype.hasOwnProperty.call(inside, "EQ")){
			this.temp = this.filterHelper.applyEQFilter(inside.EQ,result);
		} else if(Object.prototype.hasOwnProperty.call(inside, "GT")){
			this.temp = this.filterHelper.applyGTFilter(inside.GT,result);
		} else if(Object.prototype.hasOwnProperty.call(inside, "LT")){
			this.temp = this.filterHelper.applyLTFilter(inside.LT,result);
		}else{
			throw new InsightError("not such key.");
		}

		return this.temp;
	}


	public loopIntoWhere(value: any, result: any[]) {
		for(let nestedValue of value){
			if(Object.prototype.hasOwnProperty.call(nestedValue, "AND")){
				this.loopIntoWhere(nestedValue.AND, result);
				let otherTemp = this.filterHelper.applyAndFilter(result);
				result = [];
				result.push(otherTemp);
				this.temp = result;
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "OR")){
				this.loopIntoWhere(nestedValue.OR, result);
				let otherTemp = this.filterHelper.applyOrFilter(result);
				result = [];
				result.push(otherTemp);
				this.temp = result;
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "IS")){
				this.filterHelper.applyISFilter(nestedValue.IS,result);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "NOT")){
				let cast: any[] = [];
				cast.push(nestedValue.NOT);
				this.loopIntoWhere(cast, result);
				let otherTemp = this.filterHelper.applyNOTFilter(this.temp);
				result = [];
				result.push(otherTemp);
				this.temp = result;
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


	public applyOptional(query: any, resultSoFar: any,id: string): any[] {

		let allKey = ["dept", "id", "instructor", "title",
			"uuid", "avg", "pass", "fail", "audit", "year"];
		let keep = query["OPTIONS"]["COLUMNS"];
		let newKeep = [];
		for (let each of keep) {
			newKeep.push(each.split("_")[1]);
		}
		let remove = [];
		for (let each of allKey) {
			if (!newKeep.includes(each)) {
				remove.push(each);
			}
		}

		for (let each of resultSoFar) {
			for (let nested of remove) {
				delete each[nested];
			}
		}

		if (query["OPTIONS"]["ORDER"] === undefined) {
			return resultSoFar;
		}

		let oldOrder = query["OPTIONS"]["ORDER"];
		let order = oldOrder.split("_")[1];
		if (Object.prototype.hasOwnProperty.call(query, "TRANSFORMATIONS")) {
			let performTransformation: Transformation = new Transformation(query,resultSoFar,id);
			resultSoFar = performTransformation.startTransformation();

		} else {
			resultSoFar.sort((a: any, b: any) => {
				if (this.mKey.includes(order)) {
					return a[order] - b[order];
				} else {
					if (a[order] < b[order]) {
						return -1;
					}
					if (a[order] > b[order]) {
						return 1;
					}
					return 0;
				}
			});
		}

		return resultSoFar;
	}


}
