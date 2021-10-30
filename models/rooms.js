const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roomsSchema = new Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    whatsAppNumber:{
        type:String
    },
    address:{
        type:String
    },
    zipcode:{
        type:Number
    },
    rent:{
        type:String
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    seated:{
        type:String
    },
    forGender:{
        type:String
    }
    
})

const Rooms = mongoose.model('rooms', roomsSchema)
module.exports = Rooms;