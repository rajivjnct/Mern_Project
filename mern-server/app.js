require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

//Initilization DB Connection

const db = require('./db');

const userRoute = require('./routes/userapi');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api/user', userRoute);

//const port = process.env.port || 5000 ;

const port = process.env.port;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})