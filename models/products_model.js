const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    product_title_eng: {
    type: String,
    required: true},

    product_title_th: {
        type: String,
        required: true},

    product_title_zh: {
        type: String,
        required: true},    

    image: {
    type: String,
    required: true},

    product_collection_eng: {
    type: String,
    required: true},

    product_collection_th: {
        type: String,
        required: true},

    product_collection_zh: {
        type: String,
        required: true},

    col:{
        type:Number,
        required:true
    }    

});

module.exports = Products=mongoose.model('Product',ProductsSchema);