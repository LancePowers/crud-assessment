var express = require('express');
var router = express.Router();


// get all vegans
router.get('/vegans', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//post all vegans
router.post('/vegans', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
