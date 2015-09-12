var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var veganSchema = new Schema({
    name: String,
    week: String,
    partner: String
  })


var Vegan = mongoose.model('vegan', veganSchema);

mongoose.connect('mongodb://localhost/node-vegan');

module.exports = {
  Vegan: Vegan
};
