export default class GroupHelper {
	private query: any;
	private resultSoFar: any;
	constructor(query: any, resultSoFar: any) {
		this.resultSoFar = resultSoFar;
		this.query = query;
	}
	public doGroupHelp(){
		let groupKeyArr = this.query.TRANSFORMATIONS.GROUP;
		let groupMap = new Map();
		for(let each of this.resultSoFar){
			let tempKey: string = "";
			for(let nested of groupKeyArr){
				let tempStringKey = nested.split("_")[1];
				tempKey = tempKey.concat(each[tempStringKey]);
			}
			let mapKeys = Array.from(groupMap.keys());
			if(!mapKeys.includes(tempKey)){
				let tempArr = [];
				tempArr.push(each);
				groupMap.set(tempKey,tempArr);
			}else{
				groupMap.get(tempKey).push(each);
			}
		}

		return groupMap;
	}
}
