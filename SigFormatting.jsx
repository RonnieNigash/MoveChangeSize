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
		
		// TODO: fill out logic of finding objects, moving and changing widths
		app.findObjectPreference.appliedObjectsStyles = objectStyleName[i];
		var foundObjects = doc.findObject();

		// TODO: Look through found objects and change position/width
		for (j = 0; j < foundObjects.length; j++) {
			frame = foundObjects[i];
			frame.move([X_Index, Y_Index]);
			gb = frame.geometricBounds;

			frame.geometricBounds = [gb[0], gb[1], gb[2], gb[1]+changeWidth[i]];
		}
	}
}
