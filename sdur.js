const ID = function() {
  return (
    "Event_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

function writeSdurEventData() {
  firebase
    .database()
    .ref(ID())
    .set({
      title: document.getElementById("nameField").value,
      description: document.getElementById("descriptionField").value,
      dateTime:
        document.getElementById("dateTimeField").value + "T00:00:00.000Z",
      targetGroup: document.getElementById("targetGroupField").value,
      url: document.getElementById("urlField").value
    });
}
