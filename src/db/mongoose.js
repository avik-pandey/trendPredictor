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