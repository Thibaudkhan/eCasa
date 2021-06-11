const express = require('express');
const model = require('../model/RoomModel.js')
const bodyParser = require('body-parser')

const roomRouter = express.Router();
let jsonParser = bodyParser.json()

roomRouter.get('/addRoom',(req,res)=>{
/*   try{
   }catch (e) {
       res.send("error : Failed to insert")
   }*/
    model.insert("cozy","cozy",1,"light")

});

roomRouter.get('/getAllRooms',async (req,res)=>{
   let allRooms = await model.all()
    console.log(allRooms)
    res.send(allRooms)
});

roomRouter.get('/getRoom',(req,res)=>{
    model.one(1)
});

roomRouter.post('/updateRoom',jsonParser,async (req,res)=>{
   const {idRoom,idMood} = req.body
    await  model.update(idRoom,idMood)
});

module.exports = roomRouter

