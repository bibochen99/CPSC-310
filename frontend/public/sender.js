


CampusExplorer.sendQuery = (query) => {
	return new Promise((resolve, reject) => {
		let xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.open("POST", "/query",true);
		xmlHttpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlHttpRequest.send(JSON.stringify(query));
		xmlHttpRequest.onload = function() {
			if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
				return resolve(JSON.parse(xmlHttpRequest.response));
			}else{
				return reject(JSON.parse(xmlHttpRequest.response));
			}
		};
	});
};
