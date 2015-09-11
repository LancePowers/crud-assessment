var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vegan = mongoose.model('vegan');


// get all vegans
router.get('/vegans', function(req, res, next) {
  Vegan.find(function(err,vegans){
    res.json(vegans);
  })
});

//post all vegans
router.post('/vegans', function(req, res, next) {
  console.log(req.body);
  new Vegan(JSON.parse(req.body))
  .save(function(err, vegan){
    res.json(vegan);
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
