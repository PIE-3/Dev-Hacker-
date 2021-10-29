const Rooms = require("../models/rooms");
const express = require('express');
const router = express.Router();

const getData = (req,res,next)=>{
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

router.post('/getData',getData)
module.exports = router;