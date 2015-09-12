var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require("../database.js");
var Vegan = db.Vegan;


// get all vegans
router.get('/vegans', function(req, res, next) {
  Vegan.find(function(err,vegans){
    res.json(vegans);
  })
});

//post all vegans
router.post('/vegans', function(req, res, next) {
  console.log(JSON.parse(req.body.week));
  new db.Vegan(req.body)
  .save(function(err, vegan){
    if(err) {
      console.log(err)
    }
    Vegan.find(function(err,vegans){
      res.json(vegans);
    })

  })
});

//get one vegan
router.get('/vegan/:id', function(req, res, next) {
  var query = {"_id": req.params.id};
  console.log(req.params.id)
  Vegan.findOne(query,function(err,vegan){
    res.json(vegan);
  });
});

// put one vegan
router.put('/vegan/:id', function(req, res, next) {
  var query = {"_id": req.params.id};
  var update = req.body;
  var options ={new: true};
  Vegan.findOneAndUpdate(query,update,options,function(err,vegan){
    res.json(vegan);
  })
});

// delete one vegan
router.delete('/vegan/:id', function(req, res, next) {
  var query = {"_id": req.params.id};
  Vegan.findOneAndRemove(query,function(err,vegan){
    res.json(vegan);
  })
});

module.exports = router;
