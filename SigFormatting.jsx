Main();
function Main() {
	if (app.documents.length > 0) {
		MoveChangeObjectSize(["Object Style 1", "Object Style 2"], [5, 6]);
	} else {
		alert("No open documents.");
	}
}

function MoveChangeObjectSize(objectStyleName, changeWidth) {
	var doc = app.activeDocument;
	for (i = 0; i < objectStyleName.length; i++) {
		doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.PICAS;
		doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.PICAS;
		
		// TODO: fill out logic of finding objects, moving and changing sizes
	}

}
