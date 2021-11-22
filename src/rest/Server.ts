import express, {Application, Request, Response} from "express";
import * as http from "http";
import cors from "cors";
import InsightFacade from "../controller/InsightFacade";
import {InsightDataset, InsightDatasetKind, InsightError, NotFoundError} from "../controller/IInsightFacade";
import fs from "fs";

export default class Server {
	private readonly port: number;
	private express: Application;
	private server: http.Server | undefined;
	public insightFacade: InsightFacade;
	// private insightFacade: any;


	constructor(port: number) {
		console.info(`Server::<init>( ${port} )`);
		this.insightFacade = new InsightFacade();
		this.add  = this.add.bind(this);
		this.resultQuery  = this.resultQuery.bind(this);
		this.remove  = this.remove.bind(this);
		this.listDataset  = this.listDataset.bind(this);

		this.port = port;
		this.express = express();

		this.registerMiddleware();

		this.registerRoutes();

		// NOTE: you can serve static frontend files in from your express server
		// by uncommenting the line below. This makes files in ./frontend/public
		// accessible at http://localhost:<port>/
		this.express.use(express.static("./frontend/public"));
	}

	/**
	 * Starts the server. Returns a promise that resolves if success. Promises are used
	 * here because starting the server takes some time and we want to know when it
	 * is done (and if it worked).
	 *
	 * @returns {Promise<void>}
	 */
	public start(): Promise<void> {
		return new Promise((resolve, reject) => {

			console.info("Server::start() - start");
			if (this.server !== undefined) {
				console.error("Server::start() - server already listening");
				reject();
			} else {
				this.server = this.express.listen(this.port, () => {
					console.info(`Server::start() - server listening on port: ${this.port}`);
					resolve();
				}).on("error", (err: Error) => {
					// catches errors in server start
					console.error(`Server::start() - server ERROR: ${err.message}`);
					reject(err);
				});
			}
		});
	}

	/**
	 * Stops the server. Again returns a promise so we know when the connections have
	 * actually been fully closed and the port has been released.
	 *
	 * @returns {Promise<void>}
	 */
	public stop(): Promise<void> {
		console.info("Server::stop()");
		return new Promise((resolve, reject) => {
			if (this.server === undefined) {
				console.error("Server::stop() - ERROR: server not started");
				reject();
			} else {
				this.server.close(() => {
					console.info("Server::stop() - server closed");
					resolve();
				});
			}
		});
	}

	// Registers middleware to parse request before passing them to request handlers
	private registerMiddleware() {
		// JSON parser must be place before raw parser because of wildcard matching done by raw parser below
		this.express.use(express.json());
		this.express.use(express.raw({type: "application/*", limit: "10mb"}));

		// enable cors in request headers to allow cross-origin HTTP requests
		this.express.use(cors());
	}

	// Registers all request handlers to routes
	private registerRoutes() {
		// This is an example endpoint this you can invoke by accessing this URL in your browser:
		// http://localhost:4321/echo/hello
		// console.log("ready?");
		// let content: any = fs.readFileSync("./test/resources/archives/courses.zip").
		// 	toString("base64");
		// this.insightFacade.addDataset("courses", content, InsightDatasetKind.Courses).then((r) => {
		// 	console.log("ready");
		// });
		this.express.get("/echo/:msg", Server.echo);
		this.express.put("/dataset/:id/:kind", this.add);
		this.express.delete("/dataset/:id", this.remove);
		this.express.get("/datasets/", this.listDataset);
		this.express.post("/query", this.resultQuery);


	}

	// The next two methods handle the echo service.
	// These are almost certainly not the best place to add these, but are here for your reference.
	// By updating the Server.echo function pointer above, these methods can be easily moved.
	private static echo(req: Request, res: Response) {
		try {
			console.log(`Server::echo(..) - params: ${JSON.stringify(req.params)}`);
			const response = Server.performEcho(req.params.msg);
			res.status(200).json({result: response});
		} catch (err) {
			res.status(400).json({error: err});
		}
	}

	private static performEcho(msg: string): string {
		if (typeof msg !== "undefined" && msg !== null) {
			return `${msg}...${msg}`;
		} else {
			return "Message not provided";
		}
	}

	private add(req: Request, res: Response) {
		try {
			// console.log(`Server::echo(..) - params: ${JSON.stringify(req.params)}`);
			// const response = Server.performEcho(req.params.msg);
			if((req.params.kind !== InsightDatasetKind.Courses) && (req.params.kind !== InsightDatasetKind.Rooms)){
				throw new InsightError("InsightDataset Kind is not correct");
			}
			let content: string = Buffer.from(req.body).toString("base64");
			this.insightFacade.addDataset(req.params.id,content,req.params.kind).then((value: string[])=>{
				console.log(value);
				res.status(200).json({result: value});
			}).catch((e: any)=>{
				console.log(e);
				res.status(400).json({error: e.message});
			});
		} catch (err) {
			console.log(err);
			res.status(400).json({error: err});
		}
	}

	private  remove(req: Request, res: Response) {
		this.insightFacade.removeDataset(req.params.id).then((value: string)=>{
			res.status(200).json({result: value});
		}).catch((e: any)=>{
			if(e instanceof NotFoundError){
				res.status(404).json({error: e.message});
			}
			res.status(400).json({error: e.message});
		});

	}

	private listDataset(req: Request, res: Response) {
		this.insightFacade.listDatasets().then((value: InsightDataset[])=>{
			res.status(200).json({result: value});
		});

	}

	private  resultQuery(req: Request, res: Response) {
		this.insightFacade.performQuery(req.body).then((value: any)=>{
			res.status(200).json({result: value});
		}).catch((e: any)=>{
			res.status(400).json({error: e.message});
		});
	}
}
