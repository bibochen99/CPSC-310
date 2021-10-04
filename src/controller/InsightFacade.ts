import {IInsightFacade, InsightDataset, InsightDatasetKind, InsightError} from "./IInsightFacade";
import * as fs from "fs-extra";
import Subject from "./Subject";
import JSZip = require("jszip");
import Log from "@ubccpsc310/folder-test/build/Log";

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
			let resultDataset: any[];
			jsZip.loadAsync(content, {base64: true}).then((zip) => {
				let resultCourseName: any[] = this.createUsefulFile(zip);
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
				});
			});
			let keys: string[] = this.myMap.keys();
			return resolve(keys);
		});

	}


	private createUsefulFile(zip: JSZip): any [] {
		let resultCourse: any[] = [];
		for (let file in zip.files) {
			let currFile: any = zip.files[file].async("text")
				.then((data: any) => {
					try {
						JSON.parse(data);
					} catch (err) {
						return null;
					}
				});
			if (currFile !== null){
				console.log(currFile);
				resultCourse.push(currFile);
			}
		}
		return resultCourse;
	}

	private createJSON(file: unknown[], resultDataset: any[]) {
		file.forEach((jsonFile: any) => {
			if (jsonFile !== null) {
				for (let eachSubject of jsonFile["result"]) {
					if (eachSubject.Subject !== undefined && eachSubject.Course !== undefined &&
						eachSubject.Avg !== undefined && eachSubject.Professor !== undefined
						&& eachSubject.Title !== undefined
						&& eachSubject.Pass !== undefined && eachSubject.Fail !== undefined
						&& eachSubject.Audit !== undefined
						&& eachSubject.id !== undefined  && eachSubject.Year !== undefined) {

						if (eachSubject.Section === "overall") {
							eachSubject.Year = 1900;
						}
						let sectionObject: Subject = new Subject(eachSubject.Subject.toString(),
							eachSubject.Course.toString(), parseFloat(eachSubject.Avg),
							eachSubject.Professor.toString(), eachSubject.Title.toString(),
							parseInt(eachSubject.Pass, 10),
							parseInt(eachSubject.Fail, 10),
							parseInt(eachSubject.Audit, 10),
							eachSubject.id.toString(),
							parseInt(eachSubject.Year, 10));
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

	public performQuery(query: any): Promise<any[]> {
		return Promise.reject("Not implemented.");
	}

	public listDatasets(): Promise<InsightDataset[]> {
		return Promise.reject("Not implemented.");
	}
}
