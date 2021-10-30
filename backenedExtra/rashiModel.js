// import mongooase as :
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  gender: {
    type: String,
  },
  owner: {
    type: String,
  },
  seat: {
    type: Number,
  },
 phone: {
    type: Number,
  }
})

const Rooms = mongoose.model('rooms', roomsSchema)
module.exports = Rooms