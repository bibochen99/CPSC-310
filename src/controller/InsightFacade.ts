
import {IInsightFacade, InsightDataset, InsightDatasetKind, InsightError} from "./IInsightFacade";
import * as fs from "fs-extra";

import JSZip = require("jszip");
import Log from "@ubccpsc310/folder-test/build/Log";
import Filter from "./Filter";
import {rejects} from "assert";
import QueryHelper from "./QueryHelper";
import ConverDatasetWithID from "./ConverDatasetWithID";
import {Subject} from "./Subject";
import OptionHelper from "./OptionHelper";


const persistDir = "./data";
const courseZip: string = "test/resources/archives/courses.zip";
/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {
	public myMap: any;
	public addedDataset: any[];
	public temp: any[];

	constructor() {
		console.trace("InsightFacadeImpl::init()");
		this.myMap = new Map();
		this.addedDataset = [];
		this.temp = [];

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
		// console.log(query);
		return new Promise<string[]>((resolve, reject) => {
			let qh: QueryHelper;
			let converter: ConverDatasetWithID;
			let loadedData: any = [];
			let id: string;
			loadedData = this.readDisk(loadedData);
			converter = new ConverDatasetWithID();
			id = "courses";
			let newDataset: any = converter.addIDtoDataset(loadedData,id);
			qh = new QueryHelper(newDataset);
			let result: any;

			if(qh.invalidQuery(query)){
				return reject(new InsightError("query is not valid."));
			}else if(qh.referencesMultipleDatasets()){
				return reject(new InsightError("references Multiple Datasets."));
			}

			// this.getQueryRequestKey(query);
			try{
				result = qh.getQueryRequestKey2(query,loadedData);
			}catch(e){
				return reject(new InsightError("data not ready"));
			}
			// get result here
			// this.getResult();
			let optionals: OptionHelper;
			optionals = new OptionHelper();

			if (qh.queryTooLong(result[0])){
				return reject(new InsightError("query result are longer than 5000."));
			}else if(!optionals.check(query,result[0])){
				return reject(new InsightError("not pass option"));
			}else {
				try{
					result = qh.applyOptional(query,result[0]);
				}catch(e){
					return reject(new InsightError("not valid"));
				}
			}

			// console.log(this.liftoffFilter);
			resolve(result);
		});


	}

	//
	// // should read file from disk for query
	// private possibleQueryKey: any[] = ["WHERE", "OPTIONS"];
	// private possibleInputKey: any[] = [ "title", "input", "errorExpected", "with" ];
	//
	private readDisk(loadedData: any) {
		fs.readdirSync("./data").forEach(function (file) {
			try{
				let fileName = fs.readFileSync("./data/" + file,"utf8");
				let obj = JSON.parse(fileName);
				loadedData = obj;
			} catch (e) {
				console.log("cannot read from disk");
			}

		});
		return loadedData;

	}

}

