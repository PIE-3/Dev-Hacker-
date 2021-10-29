const Rooms = require("../models/rooms");
const express = require('express');
const router = express.Router();

//post api
const postData = (req,res,next)=>{
    let rooms = new Rooms({
        location: req.body.location
    })
    rooms.save()
    .then(res=>{
        console.log("your room is created")
    })
    .catch(err=>{
        console.log(err);
    })
}

//get api
const getData = (req,res,next)=>{
    Rooms.find()
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}

router.post('/postData',postData);
router.get('/getData',getData);
module.exports = router;