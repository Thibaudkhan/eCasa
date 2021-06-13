const  firebase = require("firebase/app");
const admin = require('firebase-admin');

const db =  require("firebase/database");
const express = require("express");
const bodyParser = require('body-parser');
const pool = require('./db.js')// calling file with sql method
const moodRoutes = require("./routes/moodRoutes");
const playlistRoutes = require("./routes/moodRoutes");
const roomRoutes = require("./routes/moodRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

// Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyAPxQIiLrytwILfAXAGSL-A3M-cUZq29Ok",
    authDomain: "ecasa-42d51.firebaseapp.com",
    databaseURL : "https://ecasa-42d51-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "ecasa-42d51",
    storageBucket: "ecasa-42d51.appspot.com",
    messagingSenderId: "83987883303",
    appId: "1:83987883303:web:524b7bcae8d2695e797502"
  };

  firebase.initializeApp(firebaseConfig);

app.get('/',(req,res)=>{
  res.send("yooo" );
  writeUserData(20,"coucou","lol")
});

app.listen(PORT, ()=>{
  console.log("Server is reading at "+ PORT);
})

let writeUserData = async(light_power, name, playlist) => {
  const dbRefObject = firebase.database().ref().child("moods");
  let key =  dbRefObject.push().key;
  await firebase.database().ref('moods/' + key).set({
    light_power: light_power,
    name: name,
    playlist : playlist
  })
  /*dbRefObject.on("value", snap => {
    console.log(snap.val())
  })*/

}


  // Initialize Firebase
