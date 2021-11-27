import {InsightError} from "./IInsightFacade";
import FilterHelper from "./FilterHelper";
import MultipleDatasetsCheck from "./MultipleDatasetsCheck";
import Transformation from "./Transformation";

export default class QueryHelper {
	private mKey: string[] = ["avg", "pass", "fail", "audit", "year","lat","lon","seats"];
	private addedDataset: any;
	private finalResult: any;
	private filterHelper: FilterHelper;
	private anyKey: any=["avg", "pass", "fail", "audit", "year", "lat", "lon", "seats",
		"dept", "id", "instructor", "title", "uuid","fullname","shortname","number","name","address","type","furniture"
		,"href"];

	constructor(loadedData: any){
		this.addedDataset = loadedData;
		this.finalResult = [];
		this.filterHelper = new FilterHelper(this.finalResult,this.addedDataset);
	}


	public queryTooLong(result: any) {
		if(result === undefined){
			throw new InsightError();
		}
		return (result.length > 5000);
	}

	public referencesMultipleDatasets(query: any,id: string): boolean{
		let md: MultipleDatasetsCheck = new MultipleDatasetsCheck();
		return md.check(query,id);
	}


	public performQuery(query: any): any[] {
		let inside = query["WHERE"];
		if(Object.keys(inside).length === 0){
			let temResult = [];
			temResult.push(this.addedDataset);
			return temResult;
		}
		let result: any[] = [];
		let final: any[];
		let otherTemp: any[];
		if(Object.prototype.hasOwnProperty.call(inside, "AND")){
			final = this.loopIntoWhere(inside.AND, result);
			otherTemp = this.filterHelper.applyAndFilter(final);
			this.finalResult.push(otherTemp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "OR")){
			final = this.loopIntoWhere(inside.OR, result);
			otherTemp = this.filterHelper.applyOrFilter(final);
			this.finalResult.push(otherTemp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "IS")){
			this.finalResult.push(this.filterHelper.applyISFilter(inside.IS));
		} else if(Object.prototype.hasOwnProperty.call(inside, "NOT")){
			let cast: any[] = [];
			cast.push(inside.NOT);
			final = this.loopIntoWhere(cast, result);
			otherTemp = this.filterHelper.applyNOTFilter(final);
			this.finalResult.push(otherTemp);
		} else if(Object.prototype.hasOwnProperty.call(inside, "EQ")){
			this.finalResult.push(this.filterHelper.applyEQFilter(inside.EQ));
		} else if(Object.prototype.hasOwnProperty.call(inside, "GT")){
			this.finalResult.push(this.filterHelper.applyGTFilter(inside.GT));
		} else if(Object.prototype.hasOwnProperty.call(inside, "LT")){

			this.finalResult.push(this.filterHelper.applyLTFilter(inside.LT));
		}else{
			throw new InsightError("not such key.");
		}

		return this.finalResult;
	}


	public loopIntoWhere(value: any, result: any[]): any []  {
		let cellResult: any[] = [];
		for(let nestedValue of value){
			let otherTemp;
			let newone;
			if(Object.prototype.hasOwnProperty.call(nestedValue, "AND")){
				newone = this.loopIntoWhere(nestedValue.AND, result);
				otherTemp = this.filterHelper.applyAndFilter(newone);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "OR")){
				newone = this.loopIntoWhere(nestedValue.OR, result);
				otherTemp = this.filterHelper.applyOrFilter(newone);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "IS")){
				otherTemp = this.filterHelper.applyISFilter(nestedValue.IS);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "NOT")){
				let cast: any[] = [];
				cast.push(nestedValue.NOT);
				newone = this.loopIntoWhere(cast, result);
				otherTemp = this.filterHelper.applyNOTFilter(newone);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "EQ")){
				otherTemp = this.filterHelper.applyEQFilter(nestedValue.EQ);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "GT")){
				otherTemp = this.filterHelper.applyGTFilter(nestedValue.GT);
			} else if(Object.prototype.hasOwnProperty.call(nestedValue, "LT")){
				otherTemp = this.filterHelper.applyLTFilter(nestedValue.LT);
			}else{
				throw new InsightError("not such key after and/or.");
			}
			cellResult.push(otherTemp);
		}
		return cellResult;
	}


	public applyOptional(query: any, resultSoFar: any,id: string): any[] {

		let allKey = ["avg", "pass", "fail", "audit", "year", "lat", "lon", "seats",
			"dept", "id", "instructor", "title", "uuid","fullname","shortname","number","name","address","type"
			,"furniture","href"];
		let keep = query["OPTIONS"]["COLUMNS"];
		let tempResultSoFar = resultSoFar;


		if (Object.prototype.hasOwnProperty.call(query, "TRANSFORMATIONS")) {
			let performTransformation: Transformation = new Transformation(query,tempResultSoFar,id);
			resultSoFar = performTransformation.startTransformation();
		} else {
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
		}

		if (query["OPTIONS"]["ORDER"] === undefined) {
			return resultSoFar;
		}

		let oldOrder = query["OPTIONS"]["ORDER"];
		if(typeof oldOrder === "string"){
			let order = oldOrder.split("_")[1];
			this.oldSort(resultSoFar, order);
		}else{
			this.newSort(resultSoFar, oldOrder,query);
		}
		return resultSoFar;
	}


	private oldSort(resultSoFar: any, order: any) {
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

	private newSort(resultSoFar: any, oldOrder: any, query: any) {
		let tempKey = oldOrder["keys"];
		let tempCol = query.OPTIONS.COLUMNS;
		for(let each of tempKey){
			if(!tempCol.includes(each)){
				throw new InsightError();
			}
		}
		let tempDir = oldOrder["dir"];
		let i = 0;
		if(tempDir === "UP"){
			this.upSortHelper(resultSoFar,i,tempKey);
		}else{
			this.downSortHelper(resultSoFar,i,tempKey);
		}

	}

	private upSortHelper(resultSoFar: any, i: number, tempKey: any) {
		let order = tempKey[i];
		resultSoFar.sort((a: any, b: any) => {
			if (this.mKey.includes(order)) {
				if(a[order] - b[order]  === 0){
					i++;
					if(i <= tempKey.length - 1){
						this.upSortHelper(resultSoFar,i,tempKey);
					}
				}else{
					return a[order] - b[order];
				}
			} else {
				if(a[order] - b[order] === 0){
					i++;
					if(i <= tempKey.length - 1){
						this.upSortHelper(resultSoFar,i,tempKey);
					}
				}else{
					return a[order] > b[order] ? 1 : -1;
				}
			}
		});
	}

	private downSortHelper(resultSoFar: any, i: number, tempKey: any) {
		let order = tempKey[i];
		resultSoFar.sort((a: any, b: any) => {
			if (this.mKey.includes(order)) {
				if(a[order] - b[order]  === 0){
					i++;
					if(i <= tempKey.length - 1){
						this.downSortHelper(resultSoFar,i,tempKey);
					}
				}else{
					return -(a[order] - b[order]);
				}
			} else {
				if(a[order] - b[order] === 0){
					i++;
					if(i <= tempKey.length - 1){
						this.downSortHelper(resultSoFar,i,tempKey);
					}
				}else{
					return a[order] < b[order] ? 1 : -1;
				}
			}
		});
	}

	private checkNewOrder(query: any) {
		if(!Object.prototype.hasOwnProperty.call(query.OPTIONS.ORDER, "dir")){
			return false;
		}
		if(!Object.prototype.hasOwnProperty.call(query.OPTIONS.ORDER, "keys")){
			return false;
		}
		if(!Array.isArray(query.OPTIONS.ORDER["keys"])){
			return false;

		}
		let tempKeys = query.OPTIONS.ORDER["keys"];
		let tempApply = query.TRANSFORMATIONS.APPLY;
		let tempArr1 = [];
		for(let nestEach of tempApply){
			let tempObjKey = Object.keys(nestEach)[0];
			tempArr1.push(tempObjKey);

		}
		for(let each of tempKeys){
			if(!(tempArr1.includes(each) || this.anyKey.includes(each))){
				return false;
			}
		}

		return true;
	}


}
