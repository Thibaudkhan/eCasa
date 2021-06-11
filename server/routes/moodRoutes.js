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

moodRouter.get('/getMood',jsonParser,async (req,res)=>{
    console.log("idMoon")
    await console.log(req.body)

    let {idMood} = req.body
    let room = await model.one(idMood)
    console.log(room)
    res.send(room)
});

moodRouter.post('/updateMood',jsonParser,async (req,res)=>{
    console.log("req bosy")
    console.log(req.body)
    let {idMood,light_color,light_power,nameMood,playlist} = req.body;
    console.log("idmoon "+idMood)
    await  model.update(idMood,light_color,light_power,nameMood,playlist)
});

module.exports = moodRouter

