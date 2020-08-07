const express = require('express');
const insta = require('../models/insta.js')
const router = new express.Router()

router.get('/vogueIndia', (req, res) => {
    res.render('vogueIndia');
})
var vogue2020 = [];
router.get('/instaHashtags', (req, res) => {
    res.render('instaHashtags',{vogue2020});
})

router.get('/instaHashtagsVogue2020', (req, res) => {

    async function f1(req,rep){
        let temp = insta.find({hashtag : 'vogue2020'},function(err,collection){
            if(err)console.log(err)
            else{
                vogue2020 = collection;
            }

        });
        if(temp.err)console.log(err);
        else{
            console.log(vogue2020)
            res.render('instaHashtags',{vogue2020});
        }
    }

    f1();
})

module.exports = router;