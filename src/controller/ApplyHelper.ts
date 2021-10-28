import Decimal from "decimal.js";

export default class ApplyHelper {
	private query: any;
	private map: any;
	private ruleArr: any;
	private applyKeyArr: any;


	constructor(query: any, map: any, ruleArr: any, applyKeyArr: any) {
		this.map = map;
		this.query = query;
		this.ruleArr = ruleArr;
		this.applyKeyArr = applyKeyArr;
	}
	public doApplyHelp(){
		let i = 0;
		for(let each of this.ruleArr){
			let temKey = Object.keys(each)[0];
			let temValueID = each[Object.keys(each)[0]];
			let temValue = temValueID.split("_")[1];
			let applyKey = this.applyKeyArr[i];
			if(temKey === "COUNT"){
				this.doCount(temValue,applyKey);
			}else if(temKey === "MAX"){
				this.doMax(temValue,applyKey);
			}else if(temKey === "MIN"){
				this.doMin(temValue,applyKey);
			}else if(temKey === "AVG"){
				this.doAvg(temValue,applyKey);
			}else if(temKey === "SUM"){
				this.doSum(temValue,applyKey);
			}
			i++;
		}
		return this.getResult();


	}

	private doCount(temKey: string, applyKey: any) {
		let strApply = "apply-";

		for (let value of this.map.values()) {
			let tempArr: any = [];
			for(let nested of value){
				if(tempArr.length === 0){
					tempArr.push(nested[temKey]);
				}else {
					if(!tempArr.includes( nested[temKey])){
						tempArr.push(nested[temKey]);
					}
				}
				nested[strApply.concat(applyKey)] = tempArr.length;
			}
		}
	}

	private doMax(temKey: string, applyKey: any) {
		let strApply = "apply-";
		for (let value of this.map.values()) {
			let tempArr: any = [];
			for(let nested of value){
				if(tempArr.length === 0){
					tempArr.push(nested[temKey]);
				}else {
					if(!tempArr.includes( nested[temKey])) {
						tempArr.push(nested[temKey]);
					}
				}
				nested[strApply.concat(applyKey)] = Math.max(...tempArr);

			}
		}

	}

	private doMin(temKey: string, applyKey: any) {
		// let tempResult = 999999;
		// let count = 1;
		let strApply = "apply-";

		for (let value of this.map.values()) {
			let tempArr: any = [];
			for(let nested of value){
				if(tempArr.length === 0){
					tempArr.push(nested[temKey]);
				}else {
					if(!tempArr.includes( nested[temKey])) {
						tempArr.push(nested[temKey]);
					}
				}
				nested[strApply.concat(applyKey)] = Math.min(...tempArr);

			}
		}
	}

	private doAvg(temKey: string, applyKey: any) {
		let strApply = "apply-";

		// let count = 1;
		for (let value of this.map.values()) {
			let tempResult: Decimal = new Decimal(0);
			let length = value.length;

			for(let nested of value){
				// let check = tempResult.toNumber();
				let temDecimal = new Decimal(nested[temKey]);

				tempResult = tempResult.add(temDecimal);
				let check2 = tempResult.toNumber();
				let topAvg = tempResult.toNumber();
				let avg = topAvg / length;
				let res = Number(avg.toFixed(2));
				nested[strApply.concat(applyKey)] = res;
			}
		}

	}

	private doSum(temKey: string, applyKey: any) {
		let strApply = "apply-";
		for (let value of this.map.values()) {
			let count = 0;
			let tempArr: any = [];
			for(let nested of value){
				count += nested[temKey];
				// let sum = tempArr.reduce((a: any, b: any) => a + b, 0);
				nested[strApply.concat(applyKey)] = count;

			}
		}
	}

	private getResult() {
		let tempResult: any = [];
		for(let each of this.map.values()){
			let temp = each[each.length - 1];
			tempResult.push(temp);
		}
		this.keepKey(tempResult);
		return tempResult;
	}

	private keepKey(tempResult: any) {
		let tempCol = this.query.OPTIONS.COLUMNS;
		let keep: any = [];
		for(let each of tempCol){
			if(each.includes("_")){
				keep.push(each.split("_")[1]);
			} else {
				let tempString = "apply-".concat(each);
				keep.push(tempString);
			}


		}
		for(let each of tempResult){

			let tempKey = Object.keys(each);
			for(let nestedKey of tempKey){
				if(!keep.includes(nestedKey)){
					delete each[nestedKey];
				}
			}

		}

	}
}
