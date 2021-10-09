export default class OptionHelper {
	public valid: boolean;


	constructor() {
		this.valid = true;

	}

	public check(query: any, resultElement: any) {
		let keep = query["OPTIONS"]["COLUMNS"];
		if(query["OPTIONS"] === undefined){
			return false;
		}
		if(keep === null){
			return false;

		}


		return true;
	}
}
