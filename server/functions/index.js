const functions = require("firebase-functions");
const express = require("express");
const PORT = 3000;
const app = express();

app.get('/hello',(req, res,next)=>{
    res.send("yo")
});

app.listen(PORT, ()=>{
    console.log("sur le serv");
});

exports.app = functions.https.onRequest(app);

