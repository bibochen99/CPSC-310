import * as fs from "fs-extra";
import {Subject} from "./Subject";
import JSZip from "jszip";
import {InsightDataset, InsightDatasetKind} from "./IInsightFacade";

export class Add{
	public sameID(myMap: any, id: string) {
		if (myMap.has(id)){
			return true;
		}
		return false;
	}

	public addDataToDisk(persistDir: string) {
		if (!(fs.existsSync(persistDir + "/"))) {
			fs.mkdir(persistDir, (err) => {
				if (err) {
					return console.error(err);
				}
				console.log("Directory created successfully!");
			});
		}
	}

	public validIdCheck(id: string): boolean {
		if ((id === "") || (id.includes("_"))) {
			return false;
		}
		return true;
	}
	public createUsefulFile(zip: JSZip): any [] {
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

	public createJSON(file: unknown[], resultDataset: any[]) {
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

	public addNewData(id: string, kind: InsightDatasetKind, resultDataset: any[], dataset: any[]){
		let data = {} as InsightDataset;
		data.id = id;
		data.kind = kind;
		data.numRows = resultDataset.length;
		dataset.push(data);
	}
}
