const express = require('express');
const model = require('../model/RoomModel.js')

const roomRouter = express.Router();

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

module.exports = roomRouter

