const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
var validator = require('validator');
require('dotenv').config();
const password = process.env.email_password;
// Model 
const Products = require('../../models/products_model');
const Details = require('../../models/detail_model');


router.post('/form',(req,res)=>{
    

    if(req.body.lang && req.body.msg && req.body.email && validator.isEmail(req.body.email)===true){
        let msg="";
        let title="";
        if(req.body.lang==="en"){
            msg="We have received your message";
            title="Automatic reply";
        }
        else if(req.body.lang==="zh"){
            msg="我们已经收到您的信息";
            title="自动回复";
        }
        else if(req.body.lang==="th"){
            msg="เราได้รับข้อความของคุณแล้ว";
            title="ตอบกลับอัตโนมัติ";
        }
        else{
            next();
        }

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
            subject: title, // Subject line
            html: msg +': <br><br>' + req.body.msg // plaintext body
            
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                res.json('invalid')
                return console.log(error);
            }

            console.log('Message sent: ' + info.response);
            res.json('valid')
        });

    }
    else{
        res.json('invalid')
    }





})

router.get('/products',(req,res)=>{
    
    


    const promiseA = new Promise( (resolve, reject) => {
        
            Products.distinct("product_collection_eng")
            .sort()
            .then(products => { resolve(products);})



    });
    const promiseB = new Promise( (resolve, reject) => {
        
        Products.find({}, {_id:0})
        .sort({product_collection_eng: 1})
        .then(products => {

             let rearrange=[];
             let ii=0;
             rearrange.push([products[ii]]);

           
             let i;
             
             for (i = 1; i < products.length; i++) {
                 if(products[i].product_collection_eng==products[i-1].product_collection_eng){
               
                    rearrange[ii].push(products[i]);
                 }else{ 
                   
                    ii++;
                    rearrange.push([products[i]]);
                        }
             }
             

             resolve(rearrange);
             
        })



    });




    Promise.all([promiseA, promiseB]).then(function(values) {
        res.json(values)
      });


})

router.post('/detail',(req,res)=>{
    



    const promiseA = new Promise( (resolve, reject) => {
        
            Details.find({"product_title_eng":req.body.product}, {_id:0})
            .then(detail => {resolve(detail);})



    });


    promiseA.then(function(values) {

        res.json(values)

      });


})


router.get('/mongodb',(req,res)=>{

    const promiseA = new Promise( (resolve, reject) => {
    Details.find({product_title_eng:"SupaMop I"}, {_id:0,table_eng:1,table_th:1,table_zh:1})
    .then(detail => {
        resolve(detail)

        
    
    })})

    promiseA.then(function(values) {
        
      let data_en=[values[0].table_eng[0],values[0].table_eng.splice(1,values[0].table_eng.length-1)]
      let data_th=[values[0].table_th[0],values[0].table_th.splice(1,values[0].table_th.length-1)]
      let data_zh=[values[0].table_zh[0],values[0].table_zh.splice(1,values[0].table_zh.length-1)]
    //  [values[0].table_eng[0],values[0].table_eng[0]]
    // values=values.slice(1, values.length-1);
    //  console.log(values);

        Details.updateMany({},{$set: {table_eng:data_en, table_th:data_th, table_zh:data_zh}}).then(

                res.json("ok")
            
        )

        
        
      })

    // db.details.update({product_title_eng:"SupaMop I"},{$set: {hey:kai}})
    


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