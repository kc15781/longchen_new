const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    product_title: {
    type: String,
    required: true},

    table_eng: {
    type: Array,
    required: true},

    col: {
        type: String,
        required: true},

});

module.exports = Details=mongoose.model('Detail',DetailsSchema);