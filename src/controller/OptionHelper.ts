export default class OptionHelper {
	public valid: boolean;
	public id: string;

	constructor() {
		this.valid = true;
		this.id = "";
	}

	public check(query: any) {
		let keep = query["OPTIONS"]["COLUMNS"];

		if (query["OPTIONS"] === undefined) {
			return false;
		}
		if (keep === null) {
			return false;
		}else if(keep.length === 0){
			return false;
		}
		for(let each of keep){
			if(!(each.includes("_") && each.split("_").length === 2)){
				return false;
			}
		}


		let str = keep[0].split("_")[0];
		this.id = str;
		if (Object.keys(query.OPTIONS).length === 2) {
			// let colKey:any[] = query.OPTIONS.COLUMNS;
			if (query.OPTIONS.ORDER === undefined) {
				return false;
			} else if (query.OPTIONS.ORDER === null) {
				return false;
			} else if (typeof query.OPTIONS.ORDER !== "string") {
				return false;
			} else if (query.OPTIONS.ORDER === "") {
				return false;
			}else if(!query.OPTIONS.COLUMNS.includes(query.OPTIONS.ORDER)) {
				return false;
			}

			if(!(query.OPTIONS.ORDER.includes("_") && query.OPTIONS.ORDER.split("_").length === 2)){
				return false;
			}
		}


		return Object.keys(query.OPTIONS.COLUMNS).length !== 0;


	}
	public getterID(): string{
		return this.id;
	}
}
