const Rooms = require("../models/rooms");
const express = require('express');
const router = express.Router();

//post api rooms
const postData = (req,res,next)=>{
    let rooms = new Rooms({
        name: req.body.location,
        phoneNumber : req.body.phoneNumber,
        whatsAppNumber : req.body.whatsAppNumber,
        address : req.body.address,
        zipcode : req.body.zipcode,
        rent : req.body.rent,
        category : req.body.category,
        description : req.body.description,
        seated : req.body.seated,
        forGender : req.bodyforGender
    })
    rooms.save((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            res.send(doc);
        }
    })
}

//get api
const getData = (req,res,next)=>{
    Rooms.find((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            res.send(doc);
        }
    })
    
}

router.post('/postData',postData);
router.get('/getData',getData);
module.exports = router;