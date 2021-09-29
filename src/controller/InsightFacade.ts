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
	public myDataset: InsightDataset[];

	constructor() {
		console.trace("InsightFacadeImpl::init()");
		this.myDataset = [];
	}

	public addDataset(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
		return Promise.reject("Not implemented.");
	}


	public removeDataset(id: string): Promise<string> {
		return Promise.reject("Not implemented.");
	}

	public performQuery(query: any): Promise<any[]> {
		return new Promise<string[]>((resolve, reject) => {
			if(this.invalidQuery()){
				return Promise.reject(new InsightError("query is not valid."));
			}else if(this.referencesMultipleDatasets()){
				return Promise.reject(new InsightError("references Multiple Datasets."));
			}else if (this.queryTooLong()){
				return Promise.reject(new InsightError("query result are longer than 5000."));
			}
			this.readDisk();


		});

		return Promise.reject("Not implemented.");
	}

	// should read file from disk for query
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

	private invalidQuery() {
		return false;
	}

	public listDatasets(): Promise<InsightDataset[]> {

		return new Promise<InsightDataset[]>((resolve, reject) => {
			resolve(this.myDataset);

		});
	}

	private referencesMultipleDatasets() {
		return false;
	}
}


