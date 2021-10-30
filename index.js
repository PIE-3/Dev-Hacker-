const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const roomRoute = require('./routes/routes');
const cors = require('cors');
app.use(cors());
//connection with database
const DB = 'mongodb+srv://sheetal:electrahacking@cluster0.mwyoc.mongodb.net/roomRental?retryWrites=true&w=majority';

mongoose.connect(DB,{
}).then(()=>{
    console.log("Hey Dev-Hackers, your Database connection is Successful!");
}).catch((err)=> console.log(err));


app.listen(4000, () => console.log("Hey Dev-Hackers , your server is created successfully!"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api',roomRoute);
