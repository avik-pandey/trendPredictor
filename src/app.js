const path = require('path')
const express = require('express')
const ejs = require('ejs')
require('./db/mongoose.js')
var flipkart = require('./models/flipkart.js')
var myntra = require('./models/myntra.js')
var pinterest = require('./models/pintrest.js')
var insta = require('./models/insta.js')
const myntraRoute = require('./routers/myntra-route.js')
const flipkartRoute = require('./routers/flipkart-route.js');
const vogueRoute = require('./routers/vogue-route.js');
const pinterestRoute = require('./routers/pinterest-route.js')

const app = express()
const port = process.env.PORT || 3000;

filepath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')
app.use(express.static(filepath))
app.use(myntraRoute);
app.use(flipkartRoute);
app.use(vogueRoute);
app.use(pinterestRoute);

app.get('', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


