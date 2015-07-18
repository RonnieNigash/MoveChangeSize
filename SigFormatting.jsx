Main();
function Main() {
	if (app.documents.length > 0) {
		// Names of Object Styles and their corresponding changes in width
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
		
		app.findObjectPreference.appliedObjectsStyles = objectStyleName[i];
		var foundObjects = doc.findObject();

		for (j = 0; j < foundObjects.length; j++) {
			frame = foundObjects[i];
			frame.move([0, 11.775]); // Moves the object to the point (0, 11.775) in picas
			gb = frame.geometricBounds;

			// gb[0] = y1; gb[1] = x1; gb[2] = y2; gb[3] = x2;
			// We keep the y1, x1, y2 the same.
			// Change width by adding to gb[3] -> (gb[1] + DesiredWidth)
			// Change height by adding to gb[0] -> (gb[0] + DesiredHeight) --> here we have no change
			//		 var changeHeight = 0; -> var height = gb[2] - gb[0];
			frame.geometricBounds = [gb[0], gb[1], gb[2], gb[1]+changeWidth[i]];
		}
	}
}
