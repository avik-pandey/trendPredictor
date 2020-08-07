const mongoose = require('mongoose');

var insta = mongoose.Schema({
    hashtag: String,
    imgUrl: String,

}, { collection: 'instas' });

var insta = mongoose.model("insta", insta);

module.exports = insta;