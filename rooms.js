const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  cardholdername: {
    type: String,
  },
  cardnumber: {
    type: Number,
  },
  cardexpiration: {
    type: String,
  },
  security: {
    type: Number,
  },
})

const Rooms = mongoose.model('rooms', roomsSchema)
module.exports = Rooms
