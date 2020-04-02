const ID = function() {
  return (
    "Event_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

function writeData() {
  firebase
    .database()
    .ref(ID())
    .set({
      name: document.getElementById("nameField").value

    });
}
