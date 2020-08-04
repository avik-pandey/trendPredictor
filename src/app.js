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
    Image: String,
    Trending: Boolean,
    Brand: String,
    productInfo: String
}, { collection: 'flipkart' });

var myntra = mongoose.Schema({
    i: Number,
    majorCategory: String,
    subCategory: String,
    Image: String,
    Trending: Boolean,
    Brand: String,
    productInfo: String
}, { collection: 'myntra' });

var pinterest = mongoose.Schema({
    model: String,
    imgUrl: String,

}, { collection: 'pinterest' });

var insta = mongoose.Schema({
    hashtag: String,
    imgUrl: String,

}, { collection: 'instas' });

var flipkart = mongoose.model("flipkart", flipkart);
var myntra = mongoose.model("myntra", myntra);
var pinterest = mongoose.model("pinterest", pinterest);
var insta = mongoose.model("insta", insta);



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
var fin1 = [],fin2 = [],fin3 = [];
app.get('/flipkart', (req, res) => {

    var allItems = [];
    var majCatFin = [];
    var majCat = [];
    var allWomenItems = [];
    var subCatWomen = [];
    var subCatWomenFin = [];
    var allMenItems = [];
    var subCatMen = [];
    var subCatMenFin = [];
    async function f1(req, res) {


        let temp3 = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));
            
        });
        if (temp3.err) {
            console.log(err)
        }
        else {
            
        }
    }
    async function f2(req, res) {

        let temp = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));
            
        });
        if (temp.err) {
            console.log(err)
        }
        else {
           
        }
    }

    async function f3(req, res) {


        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            
        });

        if (temp2.err) {
            console.log(err)
        }
        else {
           
        }
    }
     f1();f2(); f3();
     

    res.render('flipkart',{majCatFin,subCatMenFin,subCatWomenFin});
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


