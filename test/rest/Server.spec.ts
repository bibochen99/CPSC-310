import Server from "../../src/rest/Server";
import InsightFacade from "../../src/controller/InsightFacade";
import {expect, use} from "chai";
import chaiHttp from "chai-http";
import * as fs from "fs-extra";
import Log from "@ubccpsc310/folder-test/build/Log";

describe("Facade D3", function () {
	let facade: InsightFacade;
	let server: Server;
	const datasetsToLoad: {[key: string]: string} = {
		courses: "./test/resources/archives/courses.zip",
		rooms: "./test/resources/archives/rooms.zip",
	};
	use(chaiHttp);
	const persistDir = "./data";
	before(function () {
		if (fs.existsSync(persistDir + "/courses")) {
			fs.unlinkSync(persistDir + "/courses");
		}
		if (fs.existsSync(persistDir + "/rooms")) {
			fs.unlinkSync(persistDir + "/rooms");
		}
		fs.removeSync(persistDir);
		fs.mkdirSync(persistDir);

		facade = new InsightFacade();
		server = new Server(4321);
		// TODO: start server here once and handle errors properly
	});

	after(function () {
		// TODO: stop server here once!

		if (fs.existsSync(persistDir + "/courses")) {
			fs.unlinkSync(persistDir + "/courses");
		}
		if (fs.existsSync(persistDir + "/rooms")) {
			fs.unlinkSync(persistDir + "/rooms");
		}
		fs.removeSync(persistDir);
		fs.mkdirSync(persistDir);
	});

	beforeEach(function () {
		// might want to add some process logging here to keep track of what"s going on
	});

	afterEach(function () {
		// might want to add some process logging here to keep track of what"s going on
	});

	// Sample on how to format PUT requests

	it("PUT test for courses dataset", function () {
		let SERVER_URL = "http://localhost:4321";
		let ENDPOINT_URL = "/dataset/courses/courses";
		let ZIP_FILE_DATA = datasetsToLoad["courses"];
		try {
			return chai
				.request(SERVER_URL)
				.put(ENDPOINT_URL)
				.send(ZIP_FILE_DATA)
				.set("Content-Type", "application/x-zip-compressed")
				.then((res) => {
					// some logging here please!
					expect(res.status).to.be.equal(200);
				})
				.catch(function (err) {
					// some logging here please!
					expect.fail();
				});
		} catch (err) {
			// and some more logging here!
		}
	});
	it("remove test for courses dataset", function () {
		let SERVER_URL = "http://localhost:4321";
		let ENDPOINT_URL = "/dataset/courses";
		let ZIP_FILE_DATA = datasetsToLoad["courses"];
		try {
			return chai
				.request(SERVER_URL)
				.del(ENDPOINT_URL)
				.then((res) => {
					// some logging here please!
					expect(res.status).to.be.equal(200);
				})
				.catch(function (err) {
					// some logging here please!
					expect.fail();
				});
		} catch (err) {
			// and some more logging here!
		}
	});
	it("remove for courses dataset", function () {
		let SERVER_URL = "http://localhost:4321";
		let ENDPOINT_URL = "/dataset/coursesd";
		let ZIP_FILE_DATA = datasetsToLoad["courses"];
		try {
			return chai
				.request(SERVER_URL)
				.del(ENDPOINT_URL)
				.then((res) => {
					// some logging here please!
					expect.fail();
				})
				.catch(function (err) {
					// some logging here please!
					expect.fail();
				});
		} catch (err) {
			// and some more logging here!
		}
	});
	it("query test for courses dataset", function () {
		let SERVER_URL = "http://localhost:4321";
		let ENDPOINT_URL = "/datasets";
		let ZIP_FILE_DATA = datasetsToLoad["courses"];
		try {
			return chai
				.request(SERVER_URL)
				.get(ENDPOINT_URL)
				.then((res) => {
					// some logging here please!
					Log.test(res.body.result);
					expect(res.status).to.be.equal(200);
				})
				.catch(function (err) {
					// some logging here please!
					expect.fail();
				});
		} catch (err) {
			// and some more logging here!
		}
	});

	// The other endpoints work similarly. You should be able to find all instructions at the chai-http documentation
});
