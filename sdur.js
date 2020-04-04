let targetGroup = "TargetGroup.KiDS";
let LOGIN_EMAIL = "";
let LOGIN_PASSWORD = "";

function storeCreds() {
  LOGIN_EMAIL = document.getElementById("emailField").value;
  LOGIN_PASSWORD = document.getElementById("passwordField").value;

  // TODO: Change to Firebase Auth
  if (LOGIN_EMAIL === "admin" && LOGIN_PASSWORD === "123") {
    document.getElementById("notLoggedIn").style.visibility = "hidden";
    document.getElementById("loggedIn").style.visibility = "visible";
  }
}

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

  console.log(LOGIN_EMAIL);

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
