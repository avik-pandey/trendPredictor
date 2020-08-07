const mongoose = require('mongoose');

var myntra = mongoose.Schema({
    i: Number,
    majorCategory: String,
    subCategory: String,
    Image: String,
    Trending: Boolean,
    Brand: String,
    productInfo: String
}, { collection: 'myntra' });

var myntra = mongoose.model("myntra", myntra);

module.exports = myntra;
