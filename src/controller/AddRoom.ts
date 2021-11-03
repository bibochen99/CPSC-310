import JSZip from "jszip";
import {InsightDatasetKind, InsightError} from "./IInsightFacade";
import * as http from "http";
import * as fs from "fs";
import {Add} from "./Add";

let parse5 = require("parse5");


interface Room {
	address: string;
	shortName: string;
	fullName: string;
	resultDataset: any[];
	body: any;
	lat: any;
	lon: any;
}

interface RoomDetailData {
	unzip: any;
	address: string;
	href: string;
	shortName: string;
	fullName: string;
	resultDataset: any[];
}

export default class AddRoom {


	public addRoomSet(id: string, content: string, myMap: any, dataSets: any[]){
		return new Promise((resolve, reject) => {
			let jsZip = new JSZip();
			let unzip: any;
			let resultDataset: any[] = [];
			let resultRoomName: any[] = [];
			jsZip.loadAsync(content, { base64: true }).then((zip) => {
				unzip = zip;
				if (zip.folder("rooms") != null) {
					if (zip.folder("rooms")!.file("index.htm") != null) {
						return zip.folder("rooms")!.file("index.htm")!.async("string");
					}
				}
				throw new InsightError("No such room file");
			}).then((html) => {
				let doc = parse5.parse(html);
				let body = this.tableValidation(doc.childNodes[6].childNodes[3]);
				this.createResultDataset(unzip, body, resultRoomName, resultDataset);
				Promise.all(resultRoomName).then(() => {
					if (resultDataset.length === 0) {
						return reject(new InsightError("no valid room"));
					} else {
						let data = JSON.stringify(resultDataset);
						let addData = new Add();
						addData.addDataToDisk("./data");
						try {
							fs.writeFileSync("./data/" + id + ".json", data);
						} catch (err){
							throw new InsightError("Cannot write to disk");
						}
						addData.addNewData(id,InsightDatasetKind.Rooms, resultDataset,dataSets);
						myMap.set(id,resultDataset);
						// return keys
						let keys: string[] = Array.from(myMap.keys());
						return resolve(keys);
					}
				}).catch((err) => {
					return reject(new InsightError("invalid"));
				});
			})
				.catch((err) => {
					return reject(new InsightError("invalid"));
				});
		});
	}

	public tableValidation(table: any): any {
		for (let each of table.childNodes) {
			if (each.nodeName === "table") {
				return each.childNodes[3];
			} else if (each.childNodes !== undefined) {
				if (this.tableValidation(each) !== undefined) {
					return this.tableValidation(each);
				}
			}
		}
		return undefined;
	}

	private createResultDataset(unzip: any, body: any, resultRoomName: any[], resultDataset: any[]) {
		for (let each of body.childNodes) {
			if (each.nodeName === "tr") {
				let shortName = each.childNodes[3].childNodes[0].value.trim();
				let fullName = each.childNodes[5].childNodes[1].childNodes[0].value.trim();
				let address = each.childNodes[7].childNodes[0].value.trim();
				let href = each.childNodes[9].childNodes[1].attrs[0].value.trim();
				let detailData: RoomDetailData = {unzip,address,href,shortName,fullName,resultDataset};
				let roomDetail = this.getRoomDetailData(detailData);
				resultRoomName.push(roomDetail);
			}
		}
	}

	private getRoomDetailData(roomDetailData: RoomDetailData): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			let body: any;
			let lat: any;
			let lon: any;
			roomDetailData.unzip.file("rooms/campus/discover/buildings-and-classrooms/" + roomDetailData.shortName).
				async("string").then((building: string) => {
					let buildingHtml = parse5.parse(building);
					body = this.tableValidation(buildingHtml.childNodes[6].childNodes[3]);
					if (body === undefined) {
						return resolve({message: "no such room"});
					}
				}).then(() =>{
					this.getGeolocation(roomDetailData.address).then((data: any) => {
						if (data.error === undefined) {
							lat = data.lat;
							lon = data.lon;
						} else {
							return resolve({message: "No geolocation for this buildings."});
						}
					}).then(() =>{
						let address = roomDetailData.address;
						let shortName = roomDetailData.shortName;
						let fullName = roomDetailData.fullName;
						let resultDataset = roomDetailData.resultDataset;
						let room: Room = {address,shortName,fullName,resultDataset,body,lat,lon};
						AddRoom.createRoom(room);
						return resolve({message: fullName});
					}).catch((err: any) => {
						return reject(new InsightError("unable to read the room in the building."));
					});
				}).catch((err: any) => {
					return reject(new InsightError("the file does not exist."));
				});
		});
	}

	private getGeolocation(address: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			let url = "http://cs310.students.cs.ubc.ca:11316/api/v1/project_team105/"
				+ AddRoom.address(address);
			http.get(url, (res) => {
				const { statusCode } = res;
				let error;
				if (statusCode === undefined || statusCode < 200 || statusCode >= 300) {
					error = new Error("Request Failed.\n" +
						`Status Code: ${statusCode}`);
				}
				if (error) {
					res.resume();
					return reject(error);
				}
				res.setEncoding("utf8");
				let rawData = "";
				res.on("data", (chunk) => {
					rawData += chunk;
				});
				res.on("end", () => {
					try {
						const parsedData = JSON.parse(rawData);
						return resolve(parsedData);
					} catch (e){
						return new InsightError();
					}
				});
			}).on("error", (e) => {
				return reject (e);
			});
		});
	}


	private static address(address: string) {
		let temp = address;
		while (temp.includes(" ")) {
			temp = temp.replace(" ", "%20");
		}
		return temp;
	}

	private static createRoom({address, shortName, fullName, resultDataset, body, lat, lon}: Room) {
		for (let element of body.childNodes) {
			if (element.nodeName === "tr") {
				let roomsHref =  element.childNodes[1].childNodes[1].attrs[0].value.trim();
				let roomsNumber =  element.childNodes[1].childNodes[1].childNodes[0].value.trim();
				let roomsSeats = element.childNodes[3].childNodes[0].value.trim();
				let roomsFurniture = element.childNodes[5].childNodes[0].value.trim();
				let roomsType = element.childNodes[7].childNodes[0].value.trim();
				let room = {
					fullname: fullName, shortname: shortName,
					number: roomsNumber, name: shortName + "_" + roomsNumber,
					address: address, lat: lat,
					lon: lon, seats: parseInt(roomsSeats,10),
					type: roomsType, furniture: roomsFurniture,
					href: roomsHref
				};
				resultDataset.push(room);
			}
		}
	}
}
