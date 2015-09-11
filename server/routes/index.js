var express = require('express');
var router = express.Router();


// render home
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Half Ass Vegan' });
});

module.exports = router;
