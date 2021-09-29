import {IInsightFacade, InsightDataset, InsightDatasetKind, InsightError, NotFoundError} from "./IInsightFacade";
import * as fs from "fs-extra";
import JSZip = require("jszip");
const persistDir = "./data";
const courseZip: string = "test/resources/archives/courses.zip";
/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {
	constructor() {
		console.trace("InsightFacadeImpl::init()");
	}

	public addDataset(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
		return new Promise<string[]>((resolve, reject) => {
			this.addDataToDisk();
			if (!(this.validIdCheck(id))) {
				return Promise.reject(new InsightError("Id is not valid."));
			} else if (this.sameID(id)) {
				return Promise.reject(new InsightError("This Id already add."));
			} else if (kind === InsightDatasetKind.Rooms) {
				return Promise.reject(new InsightError("Room is Invalid in C1."));
			}
			let jsZip;
			let resultCourseName: any[] = [];
			jsZip = new JSZip();
			jsZip.loadAsync(content, {base64: true}).then(function (zip) {
				for(let file in zip.files){
					let currFile = zip.files[file].async("text").then((data: any)=>{
						try{
							return JSON.parse(data);
						} catch (e) {
							console.log("cannot parse");
						}
					}).then(function (files){
						resultCourseName.push(currFile);
					});

				}

				Promise.all(resultCourseName).then((file)=>{
					if(file.length === 0 ){
						return Promise.reject(new InsightError("length of 0 zip"));
					}
				})
				;
			});
		});
	}
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

	public performQuery(query: any): Promise<any[]> {
		return Promise.reject("Not implemented.");
	}

	public listDatasets(): Promise<InsightDataset[]> {
		return Promise.reject("Not implemented.");
	}
}
