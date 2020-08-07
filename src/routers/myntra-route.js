const express = require('express');
var myntra = require('../models/myntra.js');
const router = new express.Router()

router.get('/myntra', (req, res) => {

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });

        if (temp2.err) {
            console.log(err)
        }
        else {
            console.log(subCatWomenFin);
            res.render("myntra", { subCatWomenFin,topwearMyntra, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }


    }

    f1();
})
var topwearMyntra = [];
router.get('/myntraTopwear', (req, res) => {

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });

        if (temp2.err) {
            console.log(err)
        }
        else {
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Topwear'},function(err,collection){
           if(err)console.log(err)
           else topwearMyntra = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(topwearMyntra);
            res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen,topwearMyntra });

        }


    }

    f1();
})

module.exports = router;