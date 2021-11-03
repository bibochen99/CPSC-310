export default class ConvertDatasetWithID {

	private input: any[];
	constructor(){
		this.input = [];

	}


	public addIDtoDataset(loadedData: any, id: string, check: any): any[] {
		// https://stackoverflow.com/questions/13391579/how-to-rename-json-key
		function renameKey (obj: any,oldKey: any,newKey: any){
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}

		loadedData.forEach((item: any) => {
			// console.log(item["audit"]);
			if(item["dept"] !== undefined){
				renameKey(item,"dept",id + "_dept");
			}
			if(item["id"] !== undefined){
				renameKey(item,"id",id + "_id");
			}
			if(item["avg"] !== undefined){
				renameKey(item,"avg",id + "_avg");
			}
			if(item["instructor"] !== undefined){
				renameKey(item,"instructor",id + "_instructor");
			}
			if(item["title"] !== undefined){
				renameKey(item,"title",id + "_title");
			}
			if(item["pass"] !== undefined){
				renameKey(item,"pass",id + "_pass");
			}
			if(item["fail"] !== undefined){
				renameKey(item,"fail",id + "_fail");
			}
			if(item["audit"] !== undefined){
				renameKey(item,"audit",id + "_audit");
			}
			if(item["uuid"] !== undefined){
				renameKey(item,"uuid",id + "_uuid");
			}
			if(item["year"] !== undefined){
				renameKey(item,"year",id + "_year");
			}
		});
		this.changeRoom(loadedData,id);
		this.solveForApply(loadedData);

		return loadedData;
	}

	// public getIdFromDataset(): string {
	// 	return "";
	// }
	private solveForApply(loadedData: any) {
		for(let each of loadedData){
			let tempKey = Object.keys(each);
			for(let nestedKey of tempKey){
				if(nestedKey.includes("-")){
					let temKey = nestedKey;
					let newKey = temKey.split("-")[1];
					let temValue = each[temKey];
					delete each[nestedKey];
					each[newKey] = temValue;

				}
			}
		}
	}

	private changeRoom(loadedData: any, id: string) {
		function renameKey (obj: any,oldKey: any,newKey: any){
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}

		loadedData.forEach((item: any) => {
			if(item["fullname"] !== undefined){
				renameKey(item,"fullname",id + "_fullname");
			}
			if(item["shortname"] !== undefined){
				renameKey(item,"shortname",id + "_shortname");
			}
			if(item["number"] !== undefined){
				renameKey(item,"number",id + "_number");
			}
			if(item["address"] !== undefined){
				renameKey(item,"address",id + "_address");
			}
			if(item["lat"] !== undefined){
				renameKey(item,"lat",id + "_lat");
			}
			if(item["lon"] !== undefined){
				renameKey(item,"lon",id + "_lon");
			}
			if(item["seats"] !== undefined){
				renameKey(item,"seats",id + "_seats");
			}
			if(item["type"] !== undefined){
				renameKey(item,"type",id + "_type");
			}
			if(item["furniture"] !== undefined){
				renameKey(item,"furniture",id + "_furniture");
			}
			if(item["href"] !== undefined){
				renameKey(item,"href",id + "_href");
			}
			if(item["name"] !== undefined){
				renameKey(item,"name",id + "_name");
			}
		});
	}
}
