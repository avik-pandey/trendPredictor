const express = require('express');
var pinterest = require('../models/pintrest.js');
const router = new express.Router()

var allItems1 = [];
var models = [];
var modelsFin = [];


router.get('/pinterest', (req, res) => {

    async function f1(req, rep) {
        let temp = await pinterest.find({}, function (err, collection) {
            if (err)
                console.log(err)
            allItems1 = collection;
            //  console.log(allItems1);
            for (var i = 0; i < allItems1.length; i++) {
                var fake = allItems1[i].model
                models.push(fake);
            }

            modelsFin = Array.from(new Set(models));
            // subCatWomenFin = [];majCatFin = [];subCatMenFin = [];footwearMen = []
        })
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log(modelsFin);
            res.render('pinterest', { kendallJenner,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen,topwearMyntra });
        }
    }
    f1();
})
var kendallJenner = []
router.get('/pinterestkendall%20jenner%20outfits', (req, res) => {

    async function f1(req, rep) {
        let temp = await pinterest.find({}, function (err, collection) {
            if (err)
                console.log(err)
            allItems1 = collection;
            //  console.log(allItems1);
            for (var i = 0; i < allItems1.length; i++) {
                var fake = allItems1[i].model
                models.push(fake);
            }

            modelsFin = Array.from(new Set(models));
            // subCatWomenFin = [];majCatFin = [];subCatMenFin = [];footwearMen = []
        })
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log(modelsFin);
        }

        let temp1 = await pinterest.find({model:'kendall jenner outfits' },function(err,collection){
            if(err)console.log(err)
            else{
                kendallJenner = collection;
            }
        })
        if(temp1.err)console.log(err)
        else{
            console.log(kendallJenner);
            res.render('pinterest', { kendallJenner,subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen,topwearMyntra });
        }
    }
    f1();
})

module.exports = router;