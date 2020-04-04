let targetGroup = "TargetGroup.KiDS";

function selectTargetGroup(value) {
  targetGroup = value;
}

function writeSdurEventData() {
  const id = "Event_" + Math.random().toString(36).substr(2, 9);
  const name = document.getElementById("nameField").value ?? null;
  const description = document.getElementById("descriptionField").value;
  const dateTime =
    document.getElementById("dateTimeField").value + "T00:00:00.000Z";
  const url = document.getElementById("urlField").value;

  if (name != "" && dateTime != "T00:00:00.000Z") {
    firebase.database().ref(id).set({
      title: name,
      description: description,
      dateTime: dateTime,
      targetGroup: targetGroup,
      url: url,
    });
  }
}
