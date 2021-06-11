const db = require('../db.js')// calling file with sql method
const  firebase = require("firebase/app");
const {firebaseConfig}= require("../conf")

let Mood = {}

/*
* '"AIzaSyAPxQIiLrytwILfAXAGSL-A3M-cUZq29Ok"',
  FIREBASE_AUTH_DOMAIN: '"Yecasa-42d51.firebaseapp.com"',
  FIREBASE_DATABASE_URL: '"https://ecasa-42d51-default-rtdb.europe-west1.firebasedatabase.app/"',
  FIREBASE_PROJECT_ID: '"ecasa-42d51"',
  FIREBASE_STORAGE_BUCKET: '"ecasa-42d51.appspot.com"',
  FIREBASE_MESSAGING_SENDER_ID: '"83987883303"',
  FIREBASE_APP_ID: '"1:83987883303:web:524b7bcae8d2695e797502"
* */



const dbRefObject = firebase.database().ref().child("moods");

Mood.insert = (light_power, name, playlist)=>{
    let key =  dbRefObject.push().key;
     firebase.database().ref('moods/' + key).set({
        light_power: light_power,
        name: name,
        playlist : playlist
    })

}
Mood.one = (id)=>{
    dbRefObject.child(id).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
Mood.all = async ()=>{
    let roomData = null

    await dbRefObject.get().then((snapshot) => {
        if (snapshot.exists()) {
            roomData = snapshot.val();
        } else {
            roomData = "No data available";
        }
    }).catch((error) => {
        console.error(error);
    });
    return roomData
}



module.exports = Mood