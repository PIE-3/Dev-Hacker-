const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roomsSchema = new Schema({
    location : {
        type:String
    }
})

const Rooms = mongoose.model('rooms', roomsSchema)
module.exports = Rooms;