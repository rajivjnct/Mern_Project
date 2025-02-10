const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

//Initilization DB Connection

const db = require('./db');

app.use(bodyParser.json());

const port = process.env.port || 5000 ;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})