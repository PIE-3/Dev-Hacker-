const Rooms = require("../models/rooms");
const express = require('express');
const router = express.Router();

const getData = (req,res,next)=>{
    let rooms = new Rooms({
        location: req.body.location
    })
    rooms.save()
    .then(res=>{
        res.json({
            message : "Rooms Data added successfully"
        })
    })
    .catch(err=>{
        res.json({
            message: "There is some issue"
        })
    })
}

router.post('/getData',getData);
module.exports = router;