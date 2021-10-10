export default class OptionHelper {
	public valid: boolean;


	constructor() {
		this.valid = true;

	}

	public check(query: any) {
		let keep = query["OPTIONS"]["COLUMNS"];
		if (query["OPTIONS"] === undefined) {
			return false;
		}
		if (keep === null) {
			return false;
		}
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
		}
		return Object.keys(query.OPTIONS.COLUMNS).length !== 0;


	}
}
