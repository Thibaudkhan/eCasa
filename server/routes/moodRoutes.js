const express = require('express');
const model = require('../model/MoodModel.js')

const moodRouter = express.Router();

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


module.exports = moodRouter

