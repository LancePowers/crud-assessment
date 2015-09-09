var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

var Vegan = new Schema(
  {
    name: String,
    days: String,
    partner: String
  }
)

mongoose.model('vegan',Vegan);
mongoose.connect('mongodb://localhost/node-vegan');
