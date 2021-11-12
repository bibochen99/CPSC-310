import {InsightError} from "./IInsightFacade";
import GroupHelper from "./GroupHelper";
import ApplyHelper from "./ApplyHelper";

export default class Transformation {
	private queryInTransformation: any;
	private resultSoFar: any;
	private groupArr: any;
	private applyArr: any;
	private query: any;
	private applyKeyArr: any;
	private applyRuleArr: any;
	private applyToken: string[] = ["MAX", "MIN", "AVG", "COUNT", "SUM"];
	private mfield: string[] = ["avg", "pass", "fail", "audit", "year", "lat", "lon", "seats"];
	private id: string;
	private anyKey: any=["avg", "pass", "fail", "audit", "year", "lat", "lon", "seats",
		"dept", "id", "instructor", "title", "uuid","fullname","shortname","number","name","address","type","furniture"
		,"href"];

	constructor(query: any,resultSoFar: any,id: string){
		this.queryInTransformation = query["TRANSFORMATIONS"];
		this.resultSoFar = resultSoFar;
		this.query = query;
		this.applyKeyArr = [];
		this.applyRuleArr = [];
		this.id = id;
		if(Object.keys(this.queryInTransformation).length !== 2){
			throw new InsightError("more keys");
		}
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
		}
		// else if(this.queryInTransformation["APPLY"].length < 1){
		// 	throw new InsightError("APPLY has nothing");
		// }
		this.applyArr = this.queryInTransformation["APPLY"];
	}

	public startTransformation(): any[]{

		let tempMap: any;
		if(!this.groupChecker()){
			throw new InsightError("Group is not valid");
		}else {

			tempMap = this.groupHelper();
		//
		//
		}
		if(!this.applyChecker()){
			throw new InsightError("APPLY is not valid");
		}else{
			return this.applyHelper(tempMap);
		}
	}

	private groupHelper() {
		let groupHelper = new GroupHelper(this.query,this.resultSoFar);
		return groupHelper.doGroupHelp();

	}

	private applyHelper(tempMap: any) {
		let applyHelper = new ApplyHelper(this.query,tempMap,this.applyRuleArr,this.applyKeyArr);
		return applyHelper.doApplyHelp();
	}

	private groupChecker() {
		let tempID: any[] = [];
		for(let each of this.groupArr){
			let tempString = each.split("_")[1];
			let tempStringID = each.split("_")[0];
			if(!this.anyKey.includes(tempString)){
				return false;
			}
			if(tempID.length === 0){
				tempID.push(tempStringID);
			}else{
				if(!tempID.includes(tempStringID)){
					throw new InsightError("Query on multiple dataset");
				}
			}
		}
		return true;
	}

	private applyChecker() {

		for(let each of this.applyArr){
			let tempObjKey = Object.keys(each)[0];
			if(Object.keys(each[tempObjKey]).length !== 1){
				throw new InsightError("ApplyToken is not 1");
			}
			if(Object.keys(each).length !== 1){
				throw new InsightError("applyKey is not 1 key");
			}
			let tempString = Object.keys(each)[0];
			if(tempString.includes("_")){
				throw new InsightError("applyKey contain underscore");
			}
			if(this.applyKeyArr.includes(tempString)){
				throw new InsightError("applyKey already contain in applyKeyArr");
			}else {
				this.applyKeyArr.push(tempString);
				this.applyRuleArr.push(each[tempString]);
			}
			if(!this.applyRuleChecker()){
				throw new InsightError("invalid in applyRule");
			}
		}
		return true;
	}

	private applyRuleChecker() {
		let tempArr: any = [];
		for(let each of this.applyRuleArr){
			let tempKey = each[Object.keys(each)[0]];
			if(Object.keys(each).length === 0){
				return false;
			} else if(!this.applyToken.includes(Object.keys(each)[0])){
				return false;
			} else if(typeof tempKey !== "string"){
				return false;
			}else if(tempKey.length === 0){
				return false;
			}else if(tempKey.indexOf("_") <= 0){
				return false;
			}else if(tempKey.split("_")[0] !== this.id){
				return false;
			}
			if(tempArr.length === 0){
				tempArr.push(tempKey.split("_")[0]);
			}else {
				if(!tempArr.includes(tempKey.split("_")[0])){
					return false;
				}
			}
			let tempApplyToken = Object.keys(each)[0];
			if(tempApplyToken !== "COUNT"){
				if(!this.mfield.includes(tempKey.split("_")[1])){
					return false;
				}

			}

		}
		return true;
	}

	// private groupPrepare() {
	//
	// }
}
