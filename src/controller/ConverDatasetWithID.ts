export default class ConverDatasetWithID{

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
		return loadedData;
	}

	// public getIdFromDataset(): string {
	// 	return "";
	// }
}
