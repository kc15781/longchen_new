const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const api= require('./routes/api/api');

const app= express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo 
mongoose.connect(db,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true })
.then(()=> console.log('MmongoDB Connected...'))
.catch(err => console.log(err));

// user routes
app.use('/api/api',api);

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('client/build'));
    // for any setting directory for index file
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('Server started on port ' + port)) 