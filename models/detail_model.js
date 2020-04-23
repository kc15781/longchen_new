const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    product_title_eng: {
    type: String,
    required: true,
    trim:true},

    img_path: {
    type: String,
    required: true,
    },

    img: {
    type: Array,
    required: true,
    },

    product_title_th: {
    type: String,
    required: true,
    trim:true},


    product_title_zh: {
    type: String,
    required: true,
    trim:true},    

    table_eng: {
    type: Array,
    required: true},

    table_th: {
    type: Array,
    required: true},

    table_zh: {
    type: Array,
    required: true},    

    col: {
        type: Number,
        required: true},

});

module.exports = Details=mongoose.model('Detail',DetailsSchema);