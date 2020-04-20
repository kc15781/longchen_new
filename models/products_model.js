const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    product_title: {
    type: String,
    required: true},

    image: {
    type: String,
    required: true},

    product_collection: {
    type: String,
    required: true},

});

module.exports = Products=mongoose.model('Product',ProductsSchema);