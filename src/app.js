const path = require('path')
const express = require('express')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000;

filepath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')
app.use(express.static(filepath))

app.get('', (req, res) => {
    res.render('index');
})


app.get('/myntra', (req, res) => {
    res.render('myntra');
})

app.get('/flipkart', (req, res) => {
    res.render('flipkart');
})

app.get('/vogueIndia', (req, res) => {
    res.render('vogueIndia');
})

app.get('/instaHashtags', (req, res) => {
    res.render('instaHashtags');
})

app.get('/pinterest', (req, res) => {
    res.render('pinterest');
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
  })