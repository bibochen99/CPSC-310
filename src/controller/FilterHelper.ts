import {InsightError} from "./IInsightFacade";
import QueryHelper from "./QueryHelper";

export default class FilterHelper {
	private sKey: string[] = ["dept", "id", "instructor", "title", "uuid"];
	private mKey: string[] = ["avg", "pass", "fail", "audit", "year"];
	private temp: any;
	private addedDataset: any;

	constructor(temp: any,loadedData: any){
		this.temp = temp;
		this.addedDataset = loadedData;
	}
	public applyISFilter(IS: any,result: any[]) {
		let resultSoFar: any[] = [];
		let string = Object.keys(IS)[0];// course_avg
		let iS = string.split("_")[1];

		let stringValue = IS[string];
		if(!this.sKey.includes(iS)){
			throw new InsightError("not valid sKey.");
		}else if(typeof stringValue !== "string") {
			throw new InsightError("not string value.");
		} else{

			if(stringValue.includes("*")){
				this.extracted(stringValue, string, resultSoFar);

			}else{
				for (let each of this.addedDataset){
					if(each[string] === stringValue){
						resultSoFar.push(each);
					}
				}
			}
		}
		this.temp.push(resultSoFar);
		result.push(resultSoFar);
		return result;
	}


	private extracted(stringValue: string, string: string, resultSoFar: any[]) {

		if (stringValue.substr(0, 1) === "*" && (stringValue.substr(-1) === "*")) {
			let sub = stringValue.substr(1, stringValue.length - 2);
			if (sub.includes("*")) {
				throw new InsightError("not valid *.");
			}
			for (let each of this.addedDataset) {
				// console.log(each[string]);
				if (each[string].includes(sub)) {
					resultSoFar.push(each);
				}
			}
		} else if (stringValue.substr(0, 1) === "*") {
			let sub = stringValue.substr(1);
			if (sub.includes("*")) {
				throw new InsightError("not valid *.");
			}
			for (let each of this.addedDataset) {
				let subkey = each[string].substr((each[string].length - sub.length), each[string].length);
				if (subkey === sub) {
					resultSoFar.push(each);
				}
			}
		} else if (stringValue.substr(-1) === "*") {


			let sub = stringValue.substr(0, stringValue.length - 1);
			if (sub.includes("*")) {
				throw new InsightError("not valid *.");
			}
			for (let each of this.addedDataset) {
				let subkey = each[string].substr(0, sub.length);
				if (subkey === sub) {
					resultSoFar.push(each);
				}
			}

		} else {
			throw new InsightError("not valid *.");
		}
	}

	public applyEQFilter(EQ: any, result: any[]) {
		let string = Object.keys(EQ)[0];// course_avg
		let eQ = string.split("_")[1];
		let numValue = EQ[string];
		let resultSoFar = [];
		if(!this.mKey.includes(eQ)){
			throw new InsightError("not valid mKey.");
		}else if(typeof numValue !== "number") {
			throw new InsightError("not number value.");
		} else {
			// let temResult: any[] = this.addedDataset.filter((d)=>d.IS.key === EQ.value);
			// result.push(temResult);
			for (let each of this.addedDataset){
				if(each[string] === numValue){
					resultSoFar.push(each);
				}
			}
		}
		this.temp.push(resultSoFar);
		result.push(resultSoFar);
		return result;
	}

	public applyGTFilter(GT: any, result: any[]): any[] {
		let resultSoFar = [];
		let string = Object.keys(GT)[0];// course_avg
		let gT = string.split("_")[1];

		let numValue = GT[string];
		if(!this.mKey.includes(gT)){
			throw new InsightError("not valid mKey.");
		}else if(typeof numValue !== "number") {
			throw new InsightError("not number value.");
		} else {
			// let temResult: any[] = Object.values(this.addedDataset).filter((d)=>d.gT > GT.value);

			// Promise.all(temResult).then((file)=>{
			// 	console.log(temResult);
			// 	result.push(temResult);
			// });
			for (let each of this.addedDataset){
				if(each[string] > numValue){
					resultSoFar.push(each);
				}
			}

		}
		this.temp.push(resultSoFar);
		result.push(resultSoFar);
		return result;


	}

	public applyLTFilter(LT: any, result: any[]) {
		let string = Object.keys(LT)[0];// course_avg
		let lT = string.split("_")[1];
		let numValue = LT[string];
		let resultSoFar = [];
		if(!this.mKey.includes(lT)){
			throw new InsightError("not valid mKey.");
		}else if(typeof numValue !== "number") {
			throw new InsightError("not number value.");
		} else {

			for (let each of this.addedDataset){
				if(each[string] < numValue){
					resultSoFar.push(each);
				}
			}
		}
		this.temp.push(resultSoFar);
		result.push(resultSoFar);
		return result;
	}

	public applyAndFilter(temp: any[]): any [] {
		// console.log(temp);
		let result: any = [];
		for (let i = 1; i < temp.length; i++) {
			for (let each of temp[0]){
				if(temp[i].includes(each)){
					result.push(each);
				}
			}
		}
		// console.log(result.length);
		let remove = temp;
		temp = [];
		temp.push(result);


		return result;

	}
	public applyNOTFilter(temp: any[]): any [] {
		// let temResult: any[] = this.addedDataset.filter(((value: any) => !this.addedDataset.includes(value)));

		let holder: any[] = [];

		for (let each of this.addedDataset) {
			if (!(temp[0].includes(each))) {
				holder.push(each);
			}
		}

		// temp = [];
		// temp.push(temResult);
		// return temp;

		// console.log(holder.length);

		temp = [];
		temp.push(holder);
		return holder;
	}

	public applyOrFilter(temp: any[]) {
		let result: any = [];

		let temp2: any[];
		let longestArr: any = temp[0];

		for (let i = 1; i < temp.length ; i++) {
			if(longestArr.length < temp[i].length){
				longestArr = temp[i];
			}
		}
		temp2 = temp.filter((obj) => obj !== longestArr);

		temp2.forEach((item) => {
			for (let each of item){
				if(!(longestArr.includes(each))){
					longestArr.push(each);
				}
			}
		});
		let remove = temp;
		temp = [];
		temp.push(longestArr);
		// temp = longestArr;
		return longestArr;


	}

}
