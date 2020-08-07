const express = require('express');
var flipkart = require('../models/flipkart.js');
const router = new express.Router()

var allItems = [];
var majCatFin = [];
var majCat = [];
var allWomenItems = [];
var subCatWomen = [];
var subCatWomenFin = [];
var allMenItems = [];
var subCatMen = [];
var subCatMenFin = [];
var footwearMen = [];
var sportShoesMen = [];
var casualShoesMen = [];
var formalShoesMen = [];
var sandalsMen = [];
var flipflopsMen = [];
var loafersMen = [];
var bootsMen = [];
var runningShoesMen = [];
var clothingMen = [];
var sneakersMen = [];

router.get('/flipkartFootwear', (req, res) => {

    sportShoesMen = [];
    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Footwear" }, function (err, collection) {
            if (err) console.log(err)
            footwearMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(footwearMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartSports%20Shoes', (req, res) => {

    footwearMen = [];

    casualShoesMen = [];
    formalShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Sports Shoes" }, function (err, collection) {
            if (err) console.log(err)
            sportShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sportShoesMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartCasual%20Shoes', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];

    formalShoesMen = [];

    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Casual Shoes" }, function (err, collection) {
            if (err) console.log(err)
            casualShoesMen = collection;
            modelsFin = [];
            console.log(collection);
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualShoesMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Shoes', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];


    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Formal Shoes" }, function (err, collection) {
            if (err) console.log(err)
            formalShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(formalShoesMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartSandals%20&%20Floaters', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    formalShoesMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Sandals & Floaters" }, function (err, collection) {
            if (err) console.log(err)
            sandalsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sandalsMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartFlip-%20Flops', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    formalShoesMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Flip- Flops" }, function (err, collection) {
            if (err) console.log(err)
            flipflopsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(flipflopsMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartLoafers', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    formalShoesMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Loafers" }, function (err, collection) {
            if (err) console.log(err)
            loafersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(loafersMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartBoots', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    formalShoesMen = [];
    runningShoesMen = [];
    sneakersMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Boots" }, function (err, collection) {
            if (err) console.log(err)
            bootsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(bootsMen.length, "ok");
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})


router.get('/flipkartRunning%20Shoes', (req, res) => {

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Running Shoes" }, function (err, collection) {
            if (err) console.log(err)
            runningShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(footwearMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkartSneakers', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    formalShoesMen = [];

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

        }

        let temp3 = await flipkart.find({ subCategory: "Sneakers" }, function (err, collection) {
            if (err) console.log(err)
            sneakersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sneakersMen);
            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }
    }
    f1();
})

router.get('/flipkart', (req, res) => {

    footwearMen = [];
    sportShoesMen = [];
    casualShoesMen = [];
    sandalsMen = [];
    flipflopsMen = [];
    loafersMen = [];
    bootsMen = [];
    runningShoesMen = [];
    sneakersMen = [];
    formalShoesMen = [];


    async function f1(req, rep) {


        let temp = await flipkart.find({}, function (err, collection) {
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
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
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

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
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

            res.render("flipkart", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }


    }

    f1();

})

module.exports = router;