const express = require('express');
const model = require('../model/MoodModel.js')
const bodyParser = require('body-parser')

const moodRouter = express.Router();
let jsonParser = bodyParser.json()

moodRouter.get('/addMood',(req,res)=>{
    model.insert()
});

moodRouter.get('/getAllMoods',async (req,res)=>{
    let allRooms = await model.all()
    console.log("allRooms")
    console.log(allRooms)
    res.send(allRooms)
});

moodRouter.get('/getMood',(req,res)=>{
    model.one(1)
});

moodRouter.post('/updateMood',jsonParser,async (req,res)=>{
    console.log("req bosy")
    console.log(req.body)
    let {idMoon,light_color,light_power,nameMood,playlist} = req.body;
    console.log("idmoon "+idMoon)
    await  model.update(idMoon,light_color,light_power,nameMood,playlist)
});

module.exports = moodRouter

