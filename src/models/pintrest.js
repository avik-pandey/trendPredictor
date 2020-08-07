const mongoose = require('mongoose')

var pinterest = mongoose.Schema({
    model: String,
    imgUrl: String,

}, { collection: 'pinterest' });

var pinterest = mongoose.model("pinterest", pinterest);

module.exports = pinterest; 