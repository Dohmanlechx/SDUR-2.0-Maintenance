let targetGroup = "TargetGroup.KiDS";
let LOGIN_EMAIL = "";
let LOGIN_PASSWORD = "";

function storeCreds() {
  LOGIN_EMAIL = document.getElementById("emailField").value;
  LOGIN_PASSWORD = document.getElementById("passwordField").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(LOGIN_EMAIL, LOGIN_PASSWORD)
    .then(function (user) {
      if (user) {
        document.getElementById("notLoggedIn").style.visibility = "hidden";
        document.getElementById("loggedIn").style.visibility = "visible";
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      // ...
    });
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

function deleteOutdatedEvents() {
  firebase
    .database()
    .ref()
    .once("value")
    .then(function (elements) {
      for (let key in elements.val()) {
        let event = elements.val()[key];
        let eventDate = new Date(event["dateTime"]);
        let now = Date.now();

        if (eventDate.getTime() < now) {
          let ref = firebase.database().ref(key);
          console.log(ref);
          ref.remove();
        }
      }
    });
}
