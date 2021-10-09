import {IInsightFacade, InsightDataset, InsightDatasetKind, InsightError, NotFoundError} from "./IInsightFacade";
import * as fs from "fs-extra";

import JSZip = require("jszip");
import Log from "@ubccpsc310/folder-test/build/Log";
import {Subject} from "./Subject";
import {Add} from "./Add";

const persistDir = "./data";
const courseZip: string = "test/resources/archives/courses.zip";
/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {
	public myMap: any;
	public addData = new Add();
	public dataSets: any[] = [];
	constructor() {
		console.trace("InsightFacadeImpl::init()");
		this.myMap = new Map();
	}

	public addDataset(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
		return new Promise<string[]>((resolve, reject) => {
			if (!(this.addData.validIdCheck(id))) {
				return reject(new InsightError("Id is not valid."));
			} else if (this.addData.sameID(this.myMap,id)) {
				return reject(new InsightError("This Id already add."));
			} else if (kind === InsightDatasetKind.Rooms) {
				return reject(new InsightError("Room is Invalid in C1."));
			}
			let jsZip = new JSZip();
			let resultDataset: any[] = [];
			let resultCourseName: any[];
			jsZip.loadAsync(content, {base64: true}).then((zip) => {
				resultCourseName = this.addData.createUsefulFile(zip);
				Promise.all(resultCourseName).then((file)=>{
					if(file.length === 0 ){
						return Promise.reject(new InsightError("length of 0 in zip"));
					}
					this.addData.createJSON(file, resultDataset);
					this.addData.addDataToDisk(persistDir);
					try{
						fs.writeFileSync(persistDir + "/" + id + ".json", JSON.stringify(resultDataset));
					} catch (err) {
						throw new InsightError("Cannot write to disk");
					}
					this.addData.addNewData(id,kind,resultDataset,this.dataSets);
					this.myMap.set(id,resultDataset);
					let keys: string[] = Array.from(this.myMap.keys());
					return resolve(keys);
				}).catch((error)=>{
					return reject(new InsightError("Invalid error"));
				});
			});
		});

	}
// return true if same id from list dataset
	public removeDataset(id: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			if (!(this.addData.validIdCheck(id))) {
				return reject(new InsightError("Id is not valid."));
			} else if (!this.addData.sameID(this.myMap, id)) {
				return reject(new NotFoundError("This Id dose not exist."));
			}
			this.myMap.delete(id);
			this.dataSets.forEach((data: InsightDataset, loc)=>{
				if (data.id === id){
					this.dataSets.splice(loc);
				}
			});
			try {
				fs.unlinkSync(persistDir + "/" + id + ".json");
				console.log("successfully deleted /tmp/hello");
			} catch (error) {
				console.error("there was an error: cannot remove");
			}
			resolve(id);

		});
	}

	public performQuery(query: any): Promise<any[]> {
		return Promise.reject("Not implemented.");
	}

	public listDatasets(): Promise<InsightDataset[]> {
		return Promise.resolve(this.dataSets);
	}
}
