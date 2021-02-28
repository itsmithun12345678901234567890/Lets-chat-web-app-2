//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6Zfe03EX1D8zNnWh7PVpQndL8i5esj7g",
  authDomain: "lets-chat-34fc3.firebaseapp.com",
  projectId: "lets-chat-34fc3",
  storageBucket: "lets-chat-34fc3.appspot.com",
  messagingSenderId: "619360530204",
  appId: "1:619360530204:web:2fa4e867566c1b071214d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
