import Transformation from "./Transformation";
import {InsightError} from "./IInsightFacade";

export default class OptionHelper {
	public valid: boolean;
	public id: string;
	private anyKey: any=["avg", "pass", "fail", "audit", "year", "lat", "lon", "seats",
		"dept", "id", "instructor", "title", "uuid","fullname","shortname","number","name","address","type","furniture"
		,"herf"];

	constructor() {
		this.valid = true;
		this.id = "";
	}

	public check(query: any) {
		let keep = query["OPTIONS"]["COLUMNS"];

		if (query["OPTIONS"] === undefined) {
			return false;
		}
		if (keep === null) {
			return false;
		}else if(!(Array.isArray(keep) && keep.length > 0)){
			throw new InsightError("Col is not array or length problem");
		}


		// if (Object.prototype.hasOwnProperty.call(query, "TRANSFORMATIONS")) {
		// 	let applyKey = Object.keys(query.TRANSFORMATIONS.APPLY[0]);
		// 	for(let each of keep){
		// 		if(!(each.includes("_") && each.split("_").length === 2)){
		// 			if(!applyKey.includes(each)){
		// 				return false;
		// 			}
		// 		}
		// 	}
		// }else {
		// for (let each of keep) {
		// 	if (!(each.includes("_") && each.split("_").length === 2)) {
		// 		return false;
		// 	}
		// }
		// }


		this.id = keep[0].split("_")[0];
		this.checkColumn(query);
		if (Object.keys(query.OPTIONS).length === 2) {
			if (query.OPTIONS.ORDER === undefined) {
				return false;
			} else if (query.OPTIONS.ORDER === null) {
				return false;
			} else if (typeof query.OPTIONS.ORDER !== "string") {
				return false;
			} else if (query.OPTIONS.ORDER === "") {
				return false;
			}else if(!query.OPTIONS.COLUMNS.includes(query.OPTIONS.ORDER)) {
				return false;
			}
			if(!(query.OPTIONS.ORDER.includes("_") && query.OPTIONS.ORDER.split("_").length === 2)){
				return false;
			}
		}


		return Object.keys(query.OPTIONS.COLUMNS).length !== 0;


	}

	public getterID(): string{
		return this.id;
	}

	private checkColumn(query: any) {
		let checkID: any = [];
		if(!Object.prototype.hasOwnProperty.call(query.OPTIONS, "COLUMNS")){
			throw new InsightError("No Column");
		}
		let tempCol = query.OPTIONS.COLUMNS;
		if(!(Array.isArray(tempCol) && tempCol.length > 0)){
			throw new InsightError("Col is not array or length problem");
		}
		for (let each of tempCol){
			if(each === ""){
				throw new InsightError("format incorrect");
			}
			if(each.includes("_")){
				let tempKey = each.split("_")[1];
				let tempId = each.split("_")[0];
				if(!(each.includes("_") && each.split("_").length === 2)){
					throw new InsightError("format incorrect");
				}
				if(!this.anyKey.includes(tempKey)){
					throw new InsightError("no such key");
				}
				if(checkID.length === 0){
					checkID.push(tempId);
				}else{
					if(!checkID.includes(tempId)){
						throw new InsightError("query on multiple dataset");
					}
				}
			} else{
				if(!Object.prototype.hasOwnProperty.call(query.TRANSFORMATIONS, "APPLY")){
					throw new InsightError("No applykey");
				}
			}
		}
	}
}
