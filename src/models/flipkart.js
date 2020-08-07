const mongoose = require('mongoose');

var flipkart = mongoose.Schema({
    i: Number,
    majorCategory: String,
    subCategory: String,
    Image: String,
    Trending: Boolean,
    Brand: String,
    productInfo: String
}, { collection: 'flipkart' });

var flipkart = mongoose.model("flipkart", flipkart);

module.exports = flipkart;