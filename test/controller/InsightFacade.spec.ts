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
			// fs.removeSync(persistDir);
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

describe("Bibo's Test", function (){
	describe("InsightFacade",function () {
		const course: string = "test/resources/archives/courses.zip";
		const txt: string = "test/resources/archives/course_txt.zip";
		const emptyR: string = "test/resources/archives/courses_empty.rar";
		const emptyZ: string = "test/resources/archives/courses_empty.zip";
		const invalid: string = "test/resources/archives/courses_one_invalid.zip";
		const emptyO: string = "test/resources/archives/courses_one_empty.zip";
		const courseP: string = "test/resources/archives/courses_pdf.zip";
		const courseZ: string = "test/resources/archives/courses_zip.zip";
		const course310: string = "test/resources/archives/cpsc310.zip";
		const coursePDF: string = "test/resources/archives/courses.pdf";
		const courseRAR: string = "test/resources/archives/courses.rar";
		const invalidRAR: string = "test/resources/archives/courses_one_invalid.rar";
		const coursePic: string = "test/resources/archives/course_picture.zip";
		const courseTXTNO: string = "test/resources/archives/course_txt_nomeaning.zip";


		const empty: string = "";
		let courses = fs.readFileSync(course).toString("base64");
		let coursesTXT = fs.readFileSync(txt).toString("base64");
		let emptyRR = fs.readFileSync(emptyR).toString("base64");
		let emptyZZ = fs.readFileSync(emptyZ).toString("base64");
		let invalidd = fs.readFileSync(invalid).toString("base64");
		let empty00 = fs.readFileSync(emptyO).toString("base64");
		let coursePP = fs.readFileSync(courseP).toString("base64");
		let courseZZ = fs.readFileSync(courseZ).toString("base64");
		let courses310 = fs.readFileSync(course310).toString("base64");
		let coursePDFF = fs.readFileSync(coursePDF).toString("base64");
		let courseRARR = fs.readFileSync(courseRAR).toString("base64");
		let invalidRARR = fs.readFileSync(invalidRAR).toString("base64");
		let coursePIC = fs.readFileSync(coursePic).toString("base64");
		let courseTXT = fs.readFileSync(courseTXTNO).toString("base64");


		describe("List Datasets", function () {
			let facade: InsightFacade;

			beforeEach(function () {
				fs.removeSync("data");
				facade = new InsightFacade();
			});

			it("Should list no dataset", function () {
				return facade.listDatasets().then((insightDatasets: InsightDataset[]) => {
					expect(insightDatasets).to.deep.equal([]);
				});
			});

			it("Should list one dataset", function () {
				return facade.addDataset("COURSES", courses, InsightDatasetKind.Courses)
					.then((addData) => facade.listDatasets()
						.then((insightDatasets) => {
							expect(insightDatasets).to.deep.equal([{
								id: "COURSES",
								kind: InsightDatasetKind.Courses,
								numRows: 64612
							}]);
						}));
			});

			it("Should list multiple datasets", function () {
				this.timeout(5000);
				return facade.addDataset("COURSES", courses, InsightDatasetKind.Courses)
					.then((addData) => {
						return facade.addDataset("COURSES1", courses, InsightDatasetKind.Courses);
					})
					.then((addData) => facade.listDatasets()
						.then((insightDatasets) => {
							expect(insightDatasets).to.deep.equal([
								{
									id: "COURSES",
									kind: InsightDatasetKind.Courses,
									numRows: 64612
								},
								{
									id: "COURSES1",
									kind: InsightDatasetKind.Courses,
									numRows: 64612
								}]);
							expect(insightDatasets).to.have.length(2);
						}));
			});
		});

		describe("Add Datasets", function () {
			let facade: InsightFacade;

			beforeEach(function () {
				fs.removeSync("data");
				facade = new InsightFacade();
			});


			it("Add one dataset", function () {
				return facade.addDataset("COURSES", courses, InsightDatasetKind.Courses)
					.then((addData) => {
						expect(addData).to.deep.equal(["COURSES"]);
						expect(addData).to.have.length(1);
					});
			});

			it("Add dataset with two same id", function () {
				const id: string = "courses";
				return facade.addDataset(id, courses, InsightDatasetKind.Courses)
					.then(async (addData) => {
						// return facade.addDataset(id,courses,InsightDatasetKind.Courses);})
						//     .then((addData1)=>{
						//         expect(addData1).to.be.rejectedWith(InsightError);
						try {
							await facade.addDataset(id, courses, InsightDatasetKind.Courses);
							expect.fail("Should have rejected!");
						} catch (err) {
							expect(err).to.be.instanceof(InsightError);
						}
					});
			});

			it("Add dataset with invalid id(underscore)", function () {
				const result = facade.addDataset("c_ou_rse", courses, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with invalid pure whitespace", function () {
				const result = facade.addDataset(" ", courses, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with invalid content", function () {
				const result = facade.addDataset("course", "123", InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with txt file in zip (e)", function () {
				const result = facade.addDataset("course", coursesTXT, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with rar file", function () {
				const result = facade.addDataset("course", emptyRR, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with empty file in zip", function () {
				const result = facade.addDataset("course", emptyZZ, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with one file but only empty array", function () {
				const result = facade.addDataset("course", emptyZZ, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with one file but only invalid file", function () {
				const result = facade.addDataset("course", invalidd, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with pdf in zip", function () {
				const result = facade.addDataset("course", coursePP, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with zip in zip", function () {
				const result = facade.addDataset("course", courseZZ, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with one file named CPSC310 ZIP", function () {
				const result = facade.addDataset("course", courses310, InsightDatasetKind.Courses);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with pdf file", function () {
				const result = facade.addDataset("course", coursePDFF, InsightDatasetKind.Rooms);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with valid data in rar file", function () {
				const result = facade.addDataset("course", courseRARR, InsightDatasetKind.Rooms);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});
			it("Add dataset with invalid file in rar file", function () {
				const result = facade.addDataset("course", invalidRARR, InsightDatasetKind.Rooms);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});

			it("Add dataset with no meaning txt zip file", function () {
				const result = facade.addDataset("course", coursePIC, InsightDatasetKind.Rooms);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});
			it("Add dataset with a picture in zip file", function () {
				const result = facade.addDataset("course", courseTXT, InsightDatasetKind.Rooms);
				return expect(result).eventually.to.be.rejectedWith(InsightError);
			});


		});

		describe("Remove Datasets", function () {
			let facade: InsightFacade;

			beforeEach(function () {
				fs.removeSync("data");
				facade = new InsightFacade();
			});

			it("Remove Dataset Successfully", function () {
				return facade.addDataset("COURSES", courses, InsightDatasetKind.Courses)
					.then((addData) => {
						expect(addData).to.deep.equal(["COURSES"]);
						expect(addData).to.have.length(1);
						return facade.removeDataset("COURSES")
							.then((remove) => {
								expect(remove).to.deep.equal("COURSES");
							});
					});
			});

			it("Remove Dataset with invalid id(whitespace)", function () {
				const remove = facade.removeDataset(" ");
				return expect(remove).eventually.to.be.rejectedWith(InsightError);
			});

			it("Remove Dataset with invalid id(underscorse)", function () {
				const remove = facade.removeDataset("COU_RSE");
				return expect(remove).eventually.to.be.rejectedWith(InsightError);
			});

			it("Remove Dataset with valid id but Dataset is empty", function () {
				const remove = facade.removeDataset("COU");
				return expect(remove).eventually.to.be.rejectedWith(NotFoundError);
			});
		});
	});
});


