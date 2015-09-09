var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vegan = new Schema(
  {
    name: String,
    days: String,
    partner: String,
  }
)

mongoose.model('vegans',Vegan);
mongoose.connect('mongodb://localhost/node-vegan');
