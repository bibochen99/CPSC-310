function handleClickMe() {

	let query = CampusExplorer.buildQuery();
	CampusExplorer.sendQuery(query).then((response) => {
		CampusExplorer.renderResult(JSON.parse(response));
	}).catch((err) =>{
		CampusExplorer.renderResult(err);
		console.log(err);
	})
}


document.getElementById("submit-button").addEventListener("click", handleClickMe);
