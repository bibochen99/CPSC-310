import {IInsightFacade, InsightDataset, InsightDatasetKind, InsightError, NotFoundError} from "./IInsightFacade";
import * as fs from "fs-extra";
import JSZip = require("jszip");
import {isObject} from "util";
const persistDir = "./data";
const courseZip: string = "test/resources/archives/courses.zip";
/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {
	public myDataset: InsightDataset[];

	constructor() {
		console.trace("InsightFacadeImpl::init()");
		this.myDataset = [];
	}

	public addDataset(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {

		// return new Promise<string[]>((resolve, reject) => {
		// 	this.addDataToDisk();
		// 	if (!(this.validIdCheck(id))) {
		// 		return Promise.reject(new InsightError("Id is not valid."));
		// 	} else if (this.sameID(id)) {
		// 		return Promise.reject(new InsightError("This Id already add."));
		// 	} else if (kind === InsightDatasetKind.Rooms) {
		// 		return Promise.reject(new InsightError("Room is Invalid in C1."));
		// 	}
		// 	let jsZip;
		// 	let resultCourseName: any[] = [];
		// 	jsZip = new JSZip();
		// 	jsZip.loadAsync(content, {base64: true}).then(function (zip) {
		// 		for(let file in zip.files){
		// 			let currFile = zip.files[file].async("text").then((data: any)=>{
		// 				try{
		// 					return JSON.parse(data);
		// 				} catch (e) {
		// 					console.log("cannot parse");
		// 				}
		// 			}).then(function (files){
		// 				resultCourseName.push(currFile);
		// 			});
		//
		// 		}
		//
		// 		Promise.all(resultCourseName).then((file)=>{
		// 			if(file.length === 0 ){
		// 				return Promise.reject(new InsightError("length of 0 zip"));
		// 			}
		// 		})
		// 		;
		// 	});
		//
		// 	// fs.readFile(content, function(err, data) {
		// 	// 	if (err) {
		// 	// 		throw err;
		// 	// 	}
		// 	// 	JSZip.loadAsync(data).then(function (zip) {
		// 	// 		// ...
		// 	// 	});
		// 	// });
		//
		// });
		return Promise.reject("Not implemented.");
	}


	// return true if same id from list dataset
	private sameID(id: string) {
		return false;
	}

	private addDataToDisk() {
		if (!(fs.existsSync(persistDir))) {
			fs.mkdir(persistDir, (err) => {
				if (err) {
					return console.error(err);
				}
				console.log("Directory created successfully!");
			});
		}
	}

	private validIdCheck(id: string): boolean {
		if ((id === "") || (id.includes("_"))) {
			return false;
		}
		return true;

	}

	public removeDataset(id: string): Promise<string> {
		return Promise.reject("Not implemented.");
	}

	public listDatasets(): Promise<InsightDataset[]> {

		return new Promise<InsightDataset[]>((resolve, reject) => {
			resolve(this.myDataset);

		});
	}


	public performQuery(query: any): Promise<any[]> {
		return new Promise<string[]>((resolve, reject) => {

			this.readDisk();
			if(this.invalidQuery(query)){
				return Promise.reject(new InsightError("query is not valid."));
			}else if(this.referencesMultipleDatasets()){
				return Promise.reject(new InsightError("references Multiple Datasets."));
			}else if (this.queryTooLong()){
				return Promise.reject(new InsightError("query result are longer than 5000."));
			}


		});

		return Promise.reject("Not implemented.");
	}


	// should read file from disk for query
	private possibleQueryKey: any[] = ["WHERE", "OPTIONS"];
	private possibleInputKey: any[] = [ "title", "input", "errorExpected", "with" ];
	private readDisk() {
		fs.readdirSync(persistDir).forEach(function (file) {
			try{
				let fileName = fs.readFileSync(persistDir + file,"utf8");
				let jsonObject = JSON.parse(fileName);
			} catch (e) {
				console.log("cannot read from disk");
			}

		});

	}

	private queryTooLong() {
		return false;
	}

	private invalidQuery(query: any) {
		let queryObject = JSON.parse(query);
		let queryKeys: any [];
		queryKeys = Object.keys(queryObject);// [ 'WHERE', 'OPTIONS' ]
		// let keyInWhere = queryKeys["WHERE"];
		// let d = queryObject["WHERE"];
		for(let queryKey of queryKeys){
			if(queryKey.includes(this.possibleQueryKey)){
				return true;
			}else{
				console.log("Key is not [ 'WHERE', 'OPTIONS' ]");
				return false;
			}
		}

		if(!(this.checkValidWhere(query))){
			return false;
		}
		if(!(this.checkValidInsideWhere(query))){
			return false;
		}

		if(!("OPTIONS" in queryObject)){
			console.log("Missing OPTIONS");
			return false;
		}
		if(queryObject["OPTIONS"] === null){
			console.log("OPTIONS has null");
			return false;
		}
		if(!(typeof queryObject["OPTIONS"] === "object")){
			console.log("OPTIONS is not object");
			return false;
		}
		if(!(this.checkValidInsideOption(query))){
			return false;
		}
		return false;
	}

	private checkValidInsideWhere(query: any) {
		let queryObject = JSON.parse(query);
		let queryKeys: any [];
		let whereQuery = queryObject["WHERE"];
		queryKeys = Object.keys(queryObject);// [ 'WHERE', 'OPTIONS' ]
		// inside where
		let insideWhereKey = Object.keys(whereQuery);

		if(insideWhereKey.length > 1){
			console.log("WHERE has more object inside");
			return false;
		}


		let key = Object.keys(insideWhereKey);
		let filter = key[0];
		let filterList = ["AND","OR","NOT","IS","EQ","LT","GT","NOT"];
		if(key.length === 0){
			// console.log("nothing inside the WHERE");
			return true;
		}
		if(!(filterList.includes(filter))){
			console.log("invalid filter name");
			return false;
		}
		// for (let eachFilter of Object.entries(whereQuery)) {
		// 	let key = Object.keys(d)[0];
		// 	console.log(filterList.includes(key));
		// }

		// if(filter === "AND" || filter === "OR"){
		// 	let temQuery = whereQuery[filter];
		//
		// 	if(!(this.checkValidInsideWhere(temQuery))){
		// 		return false;
		// 	}
		//
		// }
	}


	private referencesMultipleDatasets() {
		return false;
	}

	private checkValidWhere(query: any) {
		let queryObject = JSON.parse(query);
		let queryKeys: any [];
		queryKeys = Object.keys(queryObject);// [ 'WHERE', 'OPTIONS' ]
		if(queryKeys.length !== 2){
			console.log("Query Key are not 2");
			return false;
		}
		if(!("WHERE" in queryObject)){
			console.log("Missing WHERE");
			return false;

		}
		if(queryObject["WHERE"] === null){
			console.log("WHERE has null");
			return false;
		}

		if(!(typeof queryObject["WHERE"] === "object")){
			console.log("WHERE is not object");
			return false;
		}
	}

	private checkValidInsideOption(query: any) {
		return false;
	}
}


