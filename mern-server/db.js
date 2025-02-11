require('dotenv').config();

const mongoose = require('mongoose');

const dburi = process.env.DB_URI;

mongoose.connect(`${dburi}/blog-details`);

//Checking connection 
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Mongo DB");
})

mongoose.connection.on('Error', (err)=>{
    console.log(`Connection Error : ${err}`);
})

module.exports = mongoose;