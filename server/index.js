const  firebase = require("firebase/app");
const admin = require('firebase-admin');

const db =  require("firebase/database");
const express = require("express");
const bodyParser = require('body-parser');
const pool = require('./db.js')// calling file with sql method
const moodRoutes = require("./routes/moodRoutes");
const playlistRoutes = require("./routes/moodRoutes");
const roomRoutes = require("./routes/roomRoutes");
const app = express();

const PORT = process.env.PORT || 3000;



// Your web app's Firebase configuration

app.use(moodRoutes)
app.use(roomRoutes)

app.get('/',(req,res)=>{
  res.send("yooo" );
});

app.listen(PORT, ()=>{
  console.log("Server is reading at "+ PORT);
})




  // Initialize Firebase
