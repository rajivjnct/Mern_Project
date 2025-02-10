const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog-details');

//Checking connection 
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Mongo DB");
})

mongoose.connection.on('Error', (err)=>{
    console.log(`Connection Error : ${err}`);
})

module.exports = mongoose;