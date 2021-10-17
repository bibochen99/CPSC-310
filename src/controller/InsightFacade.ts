import {
	IInsightFacade,
	InsightDataset,
	InsightDatasetKind,
	InsightError,
	NotFoundError,
	ResultTooLargeError
} from "./IInsightFacade";
import * as fs from "fs-extra";

import JSZip = require("jszip");
import OptionHelper from "./OptionHelper";
import {Add} from "./Add";
import QueryHelper from "./QueryHelper";
import ConvertDatasetWithID from "./ConvertDatasetWithID";
import CheckInvalid from "./CheckInvalid";

const persistDir = "./data";
/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {
	public myMap: any;

	public addedDataset: any[];
	public temp: any[];
	public addData;
	public dataSets: any[];
	public s: any[];
	public check: boolean;
	public id: string;

	constructor() {
		console.trace("InsightFacadeImpl::init()");
		this.myMap = new Map();
		this.addData = new Add();
		this.dataSets = [];
		this.addedDataset = [];
		this.temp = [];
		this.s = [];
		this.id = "";
		this.check = true;
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
					// this.s = resultDataset;
					// this.id = id;
					this.myMap.set(id,resultDataset);
					let keys: string[] = Array.from(this.myMap.keys());
					return resolve(keys);
				}).catch(()=>{
					return reject(new InsightError("Invalid error"));
				});
			});
		});

	}

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
				console.log("successfully deleted");
			} catch (error) {
				console.error("there was an error: cannot remove");
			}
			resolve(id);

		});
	}

	public listDatasets(): Promise<InsightDataset[]> {
		return Promise.resolve(this.dataSets);
	}

	public performQuery(query: any): Promise<any[]> {
		return new Promise<string[]>((resolve, reject) => {
			let qh: QueryHelper;
			let converter: ConvertDatasetWithID;
			let loadedData: any = [];
			let id: string;
			converter = new ConvertDatasetWithID();
			let result: any;
			let optionals = new OptionHelper();
			let ids = Array.from(this.myMap.keys());
			let checkInvalid = new CheckInvalid();
			if(!checkInvalid.invalidQuery(query)){
				return reject(new InsightError("query is not valid."));
			}else if(!optionals.check(query)){
				return reject(new InsightError("not pass option"));
			}
			id = optionals.getterID();
			loadedData = this.readDisk(loadedData,id);
			qh = new QueryHelper(loadedData);
			if(!ids.includes((id))){
				return reject(new InsightError("do not have this id."));
			}else if(qh.referencesMultipleDatasets(query,id)){
				return reject(new InsightError("references Multiple Datasets."));
			}
			try{
				result = qh.performQuery(query);
			}catch(e){
				return reject(new InsightError(e));
			}
			if (qh.queryTooLong(result[0])){
				return reject(new ResultTooLargeError("More that 5000 results"));
			}else {
				try{
					result = qh.applyOptional(query,result[0]);
				}catch(e){
					return reject(new InsightError("not valid"));
				}
			}
			let newResult: any = converter.addIDtoDataset(result,id,true);
			resolve(newResult);
		});
	}


	private readDisk(loadedData: any, id: string) {
		let str3 = id.concat(".json");
		if (fs.existsSync("./data/" + str3)) {
			let fileName = fs.readFileSync("./data/" + str3,"utf8");
			loadedData = JSON.parse(fileName);
		} else {
			// File doesn't exist in path
			throw new InsightError("no such file in disk");
		}
		return loadedData;
	}
}
