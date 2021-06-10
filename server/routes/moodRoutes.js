const express = require('express');
const model = require('../model/MoodModel.js')

const moodRouter = express.Router();

moodRouter.get('/addMood',(req,res)=>{
    model.insert()
});

moodRouter.get('/getAllMoods',(req,res)=>{
    model.all()
});

moodRouter.get('/getMood',(req,res)=>{
    model.one(1)
});

module.exports = moodRouter

