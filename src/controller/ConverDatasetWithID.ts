export default class ConverDatasetWithID{

	private input: any[];
	constructor(){
		this.input = [];

	}

	public addIDtoDataset(loadedData: any, id: string,check: boolean): any[] {
		// https://stackoverflow.com/questions/13391579/how-to-rename-json-key
		function renameKey (obj: any,oldKey: any,newKey: any){
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}
		if(check === true){
			loadedData.forEach((item: any) => {
				renameKey(item,"dept",id + "_dept");
				renameKey(item,"id",id + "_id");
				renameKey(item,"avg",id + "_avg");
				renameKey(item,"instructor",id + "_instructor");
				renameKey(item,"title",id + "_title");
				renameKey(item,"pass",id + "_pass");
				renameKey(item,"fail",id + "_fail");
				renameKey(item,"audit",id + "_audit");
				renameKey(item,"uuid",id + "_uuid");
				renameKey(item,"year",id + "_year");
			});
		}
		return loadedData;
	}

	// public getIdFromDataset(): string {
	// 	return "";
	// }
}
