import {
	InsightDataset,
	InsightDatasetKind,
	InsightError,
	NotFoundError,
	ResultTooLargeError
} from "../../src/controller/IInsightFacade";
import InsightFacade from "../../src/controller/InsightFacade";

import * as fs from "fs-extra";

import {testFolder} from "@ubccpsc310/folder-test";
import {expect} from "chai";

describe("InsightFacade_given", function () {
	let insightFacade: InsightFacade;

	const persistDir = "./data";
	const datasetContents = new Map<string, string>();

	// Reference any datasets you've added to test/resources/archives here and they will
	// automatically be loaded in the 'before' hook.
	const datasetsToLoad: {[key: string]: string} = {
		courses: "./test/resources/archives/courses.zip",
	};

	before(function () {
		// This section runs once and loads all datasets specified in the datasetsToLoad object
		for (const key of Object.keys(datasetsToLoad)) {
			const content = fs.readFileSync(datasetsToLoad[key]).toString("base64");
			datasetContents.set(key, content);
		}
		// Just in case there is anything hanging around from a previous run
		fs.removeSync(persistDir);
	});

	describe("Add/Remove/List Dataset", function () {
		before(function () {
			console.info(`Before: ${this.test?.parent?.title}`);
		});

		beforeEach(function () {
			// This section resets the insightFacade instance
			// This runs before each test
			console.info(`BeforeTest: ${this.currentTest?.title}`);
			insightFacade = new InsightFacade();
		});

		after(function () {
			console.info(`After: ${this.test?.parent?.title}`);
		});

		afterEach(function () {
			// This section resets the data directory (removing any cached data)
			// This runs after each test, which should make each test independent from the previous one
			console.info(`AfterTest: ${this.currentTest?.title}`);
			fs.removeSync(persistDir);
		});

		// This is a unit test. You should create more like this!
		it("Should add a valid dataset", function () {
			const id: string = "courses";
			const content: string = datasetContents.get("courses") ?? "";
			const expected: string[] = [id];
			return insightFacade.addDataset(id, content, InsightDatasetKind.Courses).then((result: string[]) => {
				expect(result).to.deep.equal(expected);
			});
		});
	});
	/*
	 * This test suite dynamically generates tests from the JSON files in test/queries.
	 * You should not need to modify it; instead, add additional files to the queries directory.
	 * You can still make tests the normal way, this is just a convenient tool for a majority of queries.
	 */
	describe("PerformQuery", () => {
		before(function () {
			console.info(`Before: ${this.test?.parent?.title}`);

			insightFacade = new InsightFacade();

			// Load the datasets specified in datasetsToQuery and add them to InsightFacade.
			// Will *fail* if there is a problem reading ANY dataset.
			const loadDatasetPromises = [
				insightFacade.addDataset("courses", datasetContents.get("courses") ?? "", InsightDatasetKind.Courses),
			];

			return Promise.all(loadDatasetPromises);
		});

		after(function () {
			console.info(`After: ${this.test?.parent?.title}`);
			fs.removeSync(persistDir);
		});

		type PQErrorKind = "ResultTooLargeError" | "InsightError";

		testFolder<any, any[], PQErrorKind>(
			"Dynamic InsightFacade PerformQuery tests",
			(input) => insightFacade.performQuery(input),
			"./test/resources/queries",
			{
				errorValidator: (error): error is PQErrorKind =>
					error === "ResultTooLargeError" || error === "InsightError",
				assertOnError(expected, actual) {
					if (expected === "ResultTooLargeError") {
						expect(actual).to.be.instanceof(ResultTooLargeError);
					} else {
						expect(actual).to.be.instanceof(InsightError);
					}
				},
			}
		);
	});
});

describe("Roy's Test", function () {
	let insightFacade: InsightFacade;
	const str: string = "test/resources/archives/courses.zip";
	const emptystr: string = "test/resources/archives/empty.zip";
	const rarstr: string = "test/resources/archives/courses_with_one_file.rar";
	const onefilestr: string = "test/resources/archives/courses_with_one_file.zip";
	const htmlstr: string = "test/resources/archives/containGoogleHtml.zip";
	const nothingstr: string = "test/resources/archives/nothing_txt.zip";
	const emptyystr: string = "test/resources/archives/OnlyEmptyArray.zip";
	const screenshotstr: string = "test/resources/archives/screenShotForOH.zip";
	// invalid_JSON_mutant.zip
	const invalidJsonMutant: string = "test/resources/archives/invalid_JSON_mutant.zip";
	const fS = require("fs-extra");
	let str1 = fS.readFileSync(str).toString("base64");
	let emptyStr = fS.readFileSync(emptystr).toString("base64");
	let rarStr = fS.readFileSync(rarstr).toString("base64");
	let oneFileStr = fS.readFileSync(onefilestr).toString("base64");
	let htmlStr: string = fS.readFileSync(htmlstr).toString("base64");
	let nothingStr: string = fS.readFileSync(nothingstr).toString("base64");
	let emptyyStr: string = fS.readFileSync(emptyystr).toString("base64");
	let screenshotStr: string = fS.readFileSync(screenshotstr).toString("base64");
	let invalidJsonMutantStr: string = fS.readFileSync(screenshotstr).toString("base64");

	beforeEach(function() {
		fS.removeSync("data");
		insightFacade = new InsightFacade();
	});

	it("list dataset has 2 dataset added ",  function () {
		const d1: InsightDataset[] = [{id:"ubc",kind:InsightDatasetKind.Courses,numRows:64612},
			{id:"ubc1",kind:InsightDatasetKind.Courses,numRows:64612}];
		let bar = insightFacade.addDataset("ubc", str1, InsightDatasetKind.Courses);
		return bar.then((value1) => {
			let bar1 = insightFacade.addDataset("ubc1", str1, InsightDatasetKind.Courses);
			return bar1.then((value2) =>{
				let result =  insightFacade.listDatasets();
				return expect(result).eventually.to.deep.equals(d1);
			});
		});
	});
	it("list dataset had 2 id ",  function(){
		let bar = insightFacade.addDataset("ubc", str1, InsightDatasetKind.Courses);
		return bar.then((vale) =>{
			let bar1 = insightFacade.addDataset("ubc1", str1, InsightDatasetKind.Courses);
			return bar1.then((value)=>{
				let result = insightFacade.listDatasets();
				return expect(result).eventually.to.have.length(2);
			});
		});
	});

	it("add a dataset with valid id",  function (){
		const result: Promise<string[]> = insightFacade.addDataset("a1", str1, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.deep.equal(["a1"]);
	});

	it("add a dataset with valid id null",  function (){
		const result: Promise<string[]> = insightFacade.addDataset("null", str1, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.deep.equal(["null"]);
	});

	it("add a dataset with valid id null",  function (){
		const result: Promise<string[]> = insightFacade.addDataset("undefined", str1, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.deep.equal(["undefined"]);
	});

	it("reject_add a dataset with one file in zip",  function (){
		const result: Promise<string[]> = insightFacade.addDataset("a1", oneFileStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("add a dataset with invalid content",  function (){
		const result: Promise<string[]> = insightFacade.addDataset("a1", "str1", InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});
	//
	// it("reject null id in AddDataset",  function (){
	//     let strnull:string = undefined;
	//     const result = insightFacade.addDataset(undefined, str1, InsightDatasetKind.Courses);
	//     return expect(result).eventually.to.be.rejectedWith(InsightError);
	// });

	it("reject white space in AddDataset",  function (){
		const result = insightFacade.addDataset(" ", str1, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject empty zip in AddDataset",  function (){
		const result = insightFacade.addDataset("ubc", emptyStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject rar in AddDataset",  function (){
		const result = insightFacade.addDataset("ubc", rarStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject underscore in AddDataset",  function (){
		const result = insightFacade.addDataset("a_1", str1, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject empty ID in AddDataset",  function (){
		const result = insightFacade.addDataset("", str1, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject type room in AddDataset",  function (){
		const result = insightFacade.addDataset("ubc", str1, InsightDatasetKind.Rooms);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});


	it("reject type room and empty ID in AddDataset",  function (){
		const result = insightFacade.addDataset("", str1, InsightDatasetKind.Rooms);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject content null in AddDataset",  function (){
		const result = insightFacade.addDataset("ubc", "null", InsightDatasetKind.Rooms);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	// try to fix, but not sure
	it("add same id to AddDataset",  function () {
		let bar = insightFacade.addDataset("ubc", str1, InsightDatasetKind.Courses);
		return bar.then((value1) => {
			let bar1 = insightFacade.addDataset("ubc", str1, InsightDatasetKind.Courses);
			return expect(bar1).eventually.to.be.rejectedWith(InsightError);

		});
	});

	it("remove dataset hasn't been added_with rejectedWith", function (){
		let bar = insightFacade.removeDataset("ubc");
		return expect(bar).eventually.to.be.rejectedWith(NotFoundError);
	});


	it("remove dataset with whitespace", function (){
		let bar = insightFacade.removeDataset(" ");
		return expect(bar).eventually.to.be.rejectedWith(InsightError);
	});

	it("remove dataset with underscore", function (){
		let bar = insightFacade.removeDataset("u_b_c");
		return expect(bar).eventually.to.be.rejectedWith(InsightError);
	});


	// fixed final
	it("remove valid dataset ", function (){
		let bar = insightFacade.addDataset("ubc", str1, InsightDatasetKind.Courses);
		return bar.then((value1) => {
			let bar1 = insightFacade.removeDataset("ubc");
			return bar1.then((value2) =>{
				return expect(value2).to.be.deep.equal("ubc"); // "", []
			});
		});
	});

	it("reject html contain in course for AddDataset",  function (){
		const result = insightFacade.addDataset("ubc", htmlStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject txt contain in course for AddDataset",  function (){
		const result = insightFacade.addDataset("courses", nothingStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});

	it("reject empty array for AddDataset",  function (){
		const result = insightFacade.addDataset("courses", emptyyStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});


	it("reject png file for AddDataset",  function (){
		const result = insightFacade.addDataset("courses", screenshotStr, InsightDatasetKind.Courses);
		return expect(result).eventually.to.be.rejectedWith(InsightError);
	});
	// if mutant didn't kill, un-comment this method.
	// it("reject invalid json file for AddDataset",  function (){
	// 	const result = insightFacade.addDataset("courses", invalidJsonMutantStr, InsightDatasetKind.Courses);
	// 	return expect(result).eventually.to.be.rejectedWith(InsightError);
	// });

	it("should remove a dataset from the internal model",  function (){
		const id = "courses";
		return insightFacade.addDataset(id,str1,InsightDatasetKind.Courses)
			.then(() => insightFacade.removeDataset(id)
				.then((removedID) =>{
					expect(removedID).to.equal(id);
					return insightFacade.listDatasets();
				}).then((insightDatasets)=>
					expect(insightDatasets).to.deep.equal([]))
			);

	});


});
