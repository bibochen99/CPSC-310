
import {IInsightFacade, InsightDataset, InsightDatasetKind, InsightError} from "./IInsightFacade";
import * as fs from "fs-extra";

import JSZip = require("jszip");
import Log from "@ubccpsc310/folder-test/build/Log";
import {Subject} from "./Subject";


const persistDir = "./data";
const courseZip: string = "test/resources/archives/courses.zip";
/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {
	public myMap: any;
	constructor() {
		console.trace("InsightFacadeImpl::init()");
		this.myMap = new Map();
	}

	public addDataset(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
		return new Promise<string[]>((resolve, reject) => {
			if (!(this.validIdCheck(id))) {
				return reject(new InsightError("Id is not valid."));
			} else if (this.sameID(id)) {
				return reject(new InsightError("This Id already add."));
			} else if (kind === InsightDatasetKind.Rooms) {
				return reject(new InsightError("Room is Invalid in C1."));
			}
			let jsZip = new JSZip();
			let resultDataset: any[] = [];
			let resultCourseName: any[];
			jsZip.loadAsync(content, {base64: true}).then((zip) => {
				resultCourseName = this.createUsefulFile(zip);
				Promise.all(resultCourseName).then((file)=>{
					if(file.length === 0 ){
						return Promise.reject(new InsightError("length of 0 in zip"));
					}
					this.createJSON(file, resultDataset);
					this.addDataToDisk();
					try{
						fs.writeFileSync(persistDir + id, JSON.stringify(resultDataset));
					} catch (err) {
						throw new InsightError("Cannot write to disk");
					}
					this.myMap.set(id,resultDataset);
					let keys: string[] = Array.from(this.myMap.keys());
					return resolve(keys);
				}).catch((error)=>{
					return reject(new InsightError("Invalid error"));
				});
			});
		});

	}


	private createUsefulFile(zip: JSZip): any [] {
		let resultCourse: any[] = [];
		for (let file in zip.files) {
			let currFile: any = zip.files[file].async("text")
				.then((data: any) => {
					try {
						return JSON.parse(data);
					} catch (err) {
						return null;
					}
				});
			resultCourse.push(currFile);
		}
		return resultCourse;
	}

	private createJSON(file: unknown[], resultDataset: any[]) {
		file.forEach((jsonFile: any) => {
			if (jsonFile != null) {
				for (let eachSubject of jsonFile["result"]) {
					if (eachSubject.Subject !== undefined && eachSubject.Course !== undefined &&
						eachSubject.Avg !== undefined && eachSubject.Professor !== undefined
						&& eachSubject.Title !== undefined
						&& eachSubject.Pass !== undefined && eachSubject.Fail !== undefined
						&& eachSubject.Audit !== undefined
						&& eachSubject.id !== undefined && eachSubject.Year !== undefined) {

						if (eachSubject.Section === "overall") {
							eachSubject.Year = 1900;
						}
						let sectionObject = {} as Subject;
						sectionObject.dept = eachSubject.Subject.toString();
						sectionObject.id = eachSubject.Course.toString();
						sectionObject.avg = parseFloat(eachSubject.Avg);
						sectionObject.instructor = eachSubject.Professor.toString();
						sectionObject.title = eachSubject.Title.toString();
						sectionObject.pass = parseInt(eachSubject.Pass, 10);
						sectionObject.fail = parseInt(eachSubject.Fail, 10);
						sectionObject.audit = parseInt(eachSubject.Audit, 10);
						sectionObject.uuid = eachSubject.id.toString();
						sectionObject.year = parseInt(eachSubject.Year, 10);
						resultDataset.push(sectionObject);
					}
				}
			}
		});
	}
// return true if same id from list dataset
	private sameID(id: string) {
		if (this.myMap.has(id)){
			return true;
		}
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

		return Promise.reject("Not implemented.");
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


