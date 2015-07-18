Main();
function Main() {
	if (app.documents.length > 0) {
		MoveChangeObjectSize(@param1, @param2);
	} else {
		alert("No open documents.");
	}
}

function MoveChangeObjectSize(param1, param2) {
	var doc = app.activeDocument;

}
