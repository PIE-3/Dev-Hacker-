const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roomsSchema = new Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    whatsAppNumber:{
        type:String
    },
    address:{
        type:String
    },
    zipcode:{
        type:String
    },
    
})

const Rooms = mongoose.model('rooms', roomsSchema)
module.exports = Rooms;