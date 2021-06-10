const db = require('../db.js')// calling file with sql method

const  firebase = require("firebase/app");


let Room = {}





const dbRefObject = firebase.database().ref().child("rooms");

Room.insert = (mood, name, id_tech,type)=>{
    let key =  dbRefObject.push().key;
    firebase.database().ref('rooms/' + key).set({
        mood: mood,
        name: name,
        room_setting :{
            id_tech : id_tech,
            type : type
        }
    })

}
Room.one = (id)=>{
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
Room.all = async ()=>{
    dbRefObject.get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}

module.exports = Room