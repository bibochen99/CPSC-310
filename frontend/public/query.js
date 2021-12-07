const courses = ["audit", "avg", "dept", "fail", "id", "instructor", "pass", "title", "uuid", "year"];
const rooms = [
	"address",
	"fullname",
	"furniture",
	"href",
	"lat",
	"lon",
	"name",
	"number",
	"seats",
	"shortname",
	"type",
];
const numberField = ["audit", "avg", "fail", "pass", "year", "lat", "lon", "seats"];

function queryWhere(kind, tabPanelActive) {
	let where = {};
	let tempResult = [];
	let controlGroupCondition = tabPanelActive[0]
		.getElementsByClassName("form-group conditions")[0]
		.getElementsByClassName("control-group condition");
	for (let each of controlGroupCondition) {
		let tempFilter = {};
		let tempKey = {};
		let tempField = each.childNodes[3].childNodes[1].value;
		let tempComparator = each.childNodes[5].childNodes[1].value;
		let tempValue = each.childNodes[7].childNodes[1].value;
		let combine = kind + "_" + tempField;
		tempKey[combine] = tempValue;
		tempFilter[tempComparator] = tempKey;
		if (numberField.includes(tempField)) {
			tempValue = Number(tempValue); ///
		}
		tempKey[combine] = tempValue;
		tempFilter[tempComparator] = tempKey;
		if (each.childNodes[1].childNodes[1].checked) {
			let notCase = {};
			notCase["NOT"] = tempFilter;
			tempResult.push(notCase);
		} else {
			tempResult.push(tempFilter);
		}
	}
	let radios = {
		AND: kind + "-conditiontype-all",
		OR: kind + "-conditiontype-any",
		NOT: kind + "-conditiontype-none",
	};
	let checked = "";
	for (let each of Object.keys(radios)) {
		if (document.getElementById(radios[each]).checked) {
			checked = each;
		}
	}

	if (tempResult.length === 0) {
		where = where;
	} else if (tempResult.length === 1) {
		if (checked === "NOT") {
			let temp = {};
			temp[checked] = tempResult[0];
			where = tempResult[0];
		} else {
			where = tempResult[0];
		}
	} else if (tempResult.length > 1) {
		if (checked === "AND" || checked === "OR") {
			where[checked] = tempResult;
		} else {
			let temp = {};
			temp["OR"] = tempResult;
			where["NOT"] = temp;
		}
	}

	return where;
}

function queryOrder(kind, tabPanelActive) {
	let tempKey = [];
	let tempOrder = {};
	let fields = [];
	let orderDiv = tabPanelActive[0].getElementsByClassName("form-group order")[0];
	let tempFields = orderDiv.getElementsByClassName("control order fields")[0].childNodes[1];
	if (kind === "courses") {
		fields = courses;
	} else {
		fields = rooms;
	}
	for (let each of tempFields) {
		if (each.selected) {
			if (fields.includes(each.value)) {
				tempKey.push(kind + "_" + each.value);
			} else {
				tempKey.push(each.value);
			}
		}
	}
	if (tempKey.length === 0) {
		tempOrder["keys"] = [];
	} else {
		tempOrder["keys"] = tempKey;
	}
	let orderBy = orderDiv.getElementsByClassName("control descending")[0].childNodes[1].checked;
	if (orderBy) {
		tempOrder["dir"] = "DOWN";
	} else {
		tempOrder["dir"] = "UP";
	}
	return tempOrder;
}

function queryOptions(kind, tabPanelActive) {
	let options = {};
	options["COLUMNS"] = [];
	let tempCol = tabPanelActive[0].getElementsByClassName("form-group columns")[0];
	let tempField = tempCol.getElementsByClassName("control field");
	for (let each of tempField) {
		if (each.childNodes[1].checked) {
			let combine = kind + "_" + each.childNodes[1].getAttribute("data-key");
			options["COLUMNS"].push(combine);
		}
	}
	let transformation = tempCol.getElementsByClassName("control transformation");
	if (transformation.length !== 0) {
		for (let each of transformation) {
			if (each.childNodes[1].checked) {
				options["COLUMNS"].push(each.childNodes[1].getAttribute("data-key"));
			}
		}
	}

	options["ORDER"] = queryOrder(kind, tabPanelActive);

	return options;
}

function queryGroup(kind, tabPanelActive) {
	let tempGroup = [];
	let formGroupGroups = tabPanelActive[0].getElementsByClassName("form-group groups")[0];
	let tempField = formGroupGroups.getElementsByClassName("control field");
	for (let each of tempField) {
		if (each.childNodes[1].checked) {
			let combine = kind + "_" + each.childNodes[1].getAttribute("data-key");
			tempGroup.push(combine);
		}
	}
	return tempGroup;
}

function queryApply(kind, tabPanelActive) {
	let tempApply = [];
	let formGroupTransformations = tabPanelActive[0].getElementsByClassName("form-group transformations")[0];
	let transformationsContainer = formGroupTransformations.getElementsByClassName("transformations-container")[0];
	let controlGroupTransformation = transformationsContainer.getElementsByClassName("control-group transformation");
	if (transformationsContainer.hasChildNodes()) {
		for (let each of controlGroupTransformation) {
			let controlTerm = each.getElementsByClassName("control term")[0].getElementsByTagName("input")[0].value;
			let controlOperators = each
				.getElementsByClassName("control operators")[0]
				.getElementsByTagName("select")[0].value;
			let controlFields = each
				.getElementsByClassName("control fields")[0]
				.getElementsByTagName("select")[0].value;
			let applyJson = {[controlTerm]: {[controlOperators]: kind + "_" + controlFields}};
			tempApply.push(applyJson);
		}
	}

	return tempApply;
}

CampusExplorer.buildQuery = function () {
	let tabPanelActive = document.getElementsByClassName("tab-panel active");
	let kind = tabPanelActive[0].getAttribute("data-type");
	let query = {};
	query["WHERE"] = {};
	query["WHERE"] = queryWhere(kind, tabPanelActive);
	query["OPTIONS"] = {};
	query["OPTIONS"] = queryOptions(kind, tabPanelActive);

	let group = queryGroup(kind, tabPanelActive);
	if (group.length > 0) {
		let apply = queryApply(kind, tabPanelActive);
		query["TRANSFORMATIONS"] = {GROUP: group, APPLY: apply};
	}
	return query;
};
