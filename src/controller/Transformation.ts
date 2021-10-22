import {InsightError} from "./IInsightFacade";

export default class Transformation {
	private queryInTransformation: any;
	private resultSoFar: any;
	private groupArr: any;
	private applyArr: any;
	private query: any;


	constructor(query: any,resultSoFar: any){
		this.queryInTransformation = query["TRANSFORMATIONS"];
		this.resultSoFar = resultSoFar;
		this.query = query;
		if(!Object.prototype.hasOwnProperty.call(this.queryInTransformation, "GROUP")){
			throw new InsightError("no Group");
		}else if(!Array.isArray(this.queryInTransformation["GROUP"])){
			throw new InsightError("Group is not array");
		}else if(this.queryInTransformation["GROUP"].length < 1){
			throw new InsightError("Group has nothing");
		}
		this.groupArr = this.queryInTransformation["GROUP"];

		if(!Object.prototype.hasOwnProperty.call(this.queryInTransformation, "APPLY")){
			throw new InsightError("no APPLY");
		}else if(!Array.isArray(this.queryInTransformation["APPLY"])){
			throw new InsightError("APPLY is not array");
		}else if(this.queryInTransformation["APPLY"].length < 1){
			throw new InsightError("APPLY has nothing");
		}
		this.applyArr = this.queryInTransformation["APPLY"];
	}

	public startTransformation(): any[]{
		if(!this.groupChecker()){
			throw new InsightError("Group is not valid");
		}else {
			this.groupHelper();
		}

		if(!this.applyChecker()){
			throw new InsightError("APPLY is not valid");
		}else{
			this.applyHelper();
		}
		return [];
	}

	private groupHelper() {
		return [];
	}

	private applyHelper() {
		return [];

	}

	private groupChecker() {
		let keyInCol: any[] = this.query.OPTIONS.COLUMNS;
		for(let each of this.groupArr){
			if(!keyInCol.includes(each)){
				return false;
			}
		}
		return true;
	}

	private applyChecker() {
		for(let each of this.applyArr){
			if(Object.keys(each).length !== 1){
				throw new InsightError("applyKey is not 1 key");
			}
			if(Object.keys(each)[0].includes("_")){
				throw new InsightError("applyKey contain underscore");
			}
		}
		return false;
	}
}
