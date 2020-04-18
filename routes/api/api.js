const express = require('express');
const router = express.Router();


//Item Model 
const Item = require('../../models/items');

// @route GET api/items
// @desc Get All Items
// @access Public 

router.get('/form',(req,res)=>{

    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})


// @route Post api/items
// @desc Create a Post
// @access Public 

router.post('/',(req,res)=>{

const newItem = new Item({
    name: req.body.name
});

newItem.save().then(item=> res.json(item));

})

router.get('/form',(req,res)=>{

    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})

module.exports = router;