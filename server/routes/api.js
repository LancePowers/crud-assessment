var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vegan = mongoose.model('vegans');

// get all vegans
router.get('/vegans', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//post all vegans
router.post('/vegans', function(req, res, next) {
  console.log(req.body)
  new Vegan(req.body)
  .save(function(req){
    res.json({message:req});
  })
});

//get one vegan
router.get('/vegan/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// put one vegan
router.put('/vegan/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// delete one vegan
router.delete('/vegan/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
