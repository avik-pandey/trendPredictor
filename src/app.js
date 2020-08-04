const path = require('path')
const express = require('express')
const ejs = require('ejs')
var mongoose = require('mongoose');

const url = "mongodb://user:flipkart@cluster0-shard-00-00.pe7lw.mongodb.net:27017,cluster0-shard-00-01.pe7lw.mongodb.net:27017,cluster0-shard-00-02.pe7lw.mongodb.net:27017/intelFashion?ssl=true&replicaSet=atlas-r398qc-shard-0&authSource=admin&retryWrites=true&w=majority";
// var db = 'intelFashion'; 

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,

})
.then(() => {
      console.log('Connection to the Atlas Cluster is successfuul!');
  })
.catch((err) => console.error(err)); 

var flipkart = mongoose.Schema({
    i: Number,
    majorCategory: String,
    subCategory: String,
    Image:String,
    Trending:Boolean,
    Brand:String,
    productInfo:String
}, {collection: 'flipkart'});

var flipkart = mongoose.model("flipkart",flipkart);

 

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

    var majCat = [];
    flipkart.find({},function(err,collection){ 
        if(err)console.log(err);
        console.log(collection)
      });
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


