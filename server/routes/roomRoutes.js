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

roomRouter.get('/getAllRooms',(req,res)=>{
    model.all()
});

roomRouter.get('/getRoom',(req,res)=>{
    model.one(1)
});

module.exports = roomRouter

