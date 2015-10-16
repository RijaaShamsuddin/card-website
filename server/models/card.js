/**
 * Created by Hira on 9/18/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema( {
  category_id : String,
  name : String,
  url: String,
  price: Number,

});

module.exports = mongoose.model('Card', cardSchema);

