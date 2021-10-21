import {InsightError} from "./IInsightFacade";

export default class Transformation {
	private queryInTransformation: any;
	private resultSoFar: any;


	constructor(query: any,resultSoFar: any){
		this.queryInTransformation = query["TRANSFORMATIONS"];
		this.resultSoFar = resultSoFar;
		if(!Object.prototype.hasOwnProperty.call(this.queryInTransformation, "GROUP")){
			throw new InsightError("no Group");
		}else if(!Array.isArray(this.queryInTransformation["GROUP"])){
			throw new InsightError("Group is not array");
		}
		if(!Object.prototype.hasOwnProperty.call(this.queryInTransformation, "APPLY")){
			throw new InsightError("no APPLY");
		}else if(!Array.isArray(this.queryInTransformation["APPLY"])){
			throw new InsightError("APPLY is not array");
		}
	}
}
