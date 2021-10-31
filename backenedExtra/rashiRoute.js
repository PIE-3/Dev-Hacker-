const express = require('express');
const route = express.Router()
// require model here 


route.post('/api/rooms', (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new room
    const room = new Room({
        name : req.body.name,
        email : req.body.email,
        address : req.body.address,
        zipcode : req.body.zipcode,
        gender: req.body.gender,
        owner : req.body.owner,
        seat : req.body.seat,
        phone : req.body.phone,
    })

    // save user in the database
    room
        .save(room)
        .then(data => {
            //here we redirect the data i.e sendig the data,res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

});

module.exports = route;