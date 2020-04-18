const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();
const password = process.env.email_password;
//Item Model 
const Item = require('../../models/items');

// @route GET api/items
// @desc Get All Items
// @access Public 

router.post('/form',(req,res)=>{
    console.log(req.body)
    // Create the transporter with the required configuration for Outlook
    // change the user and pass !
    var transporter = nodemailer.createTransport({
        host: "smtp.live.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
        ciphers:'SSLv3'
        },
        auth: {
            user: 'longchenthai@hotmail.co.th',
            pass: password
        }
    });

    // setup e-mail data, even with unicode symbols
    var mailOptions = {
        from: '"Lonchen Technology" <longchenthai@hotmail.co.th>', // sender address (who sends)
        to: req.body.email+",kc15781@my.bristol.ac.uk", // list of receivers (who receives)
        subject: 'Automatic reply', // Subject line
        text: 'We have received your email: ' + req.body.msg // plaintext body
        
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });

  





})


// @route Post api/items
// @desc Create a Post
// @access Public 

// router.post('/',(req,res)=>{

// const newItem = new Item({
//     name: req.body.name
// });

// newItem.save().then(item=> res.json(item));

// })

// router.get('/form',(req,res)=>{

//     Item.find()
//     .sort({date: -1})
//     .then(items => res.json(items))
// })

module.exports = router;