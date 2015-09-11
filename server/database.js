var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weekSchema = new Schema({
  'mon': String,
  'tue': String,
  'wed': String,
  'thu': String,
  'fri': String,
  'sat': String,
  'sun': String
})

var veganSchema = new Schema({
    name: String,
    week: [weekSchema],
    partner: String
  })


mongoose.model('vegan', veganSchema);
mongoose.model('week', weekSchema);
mongoose.connect('mongodb://localhost/node-vegan');
