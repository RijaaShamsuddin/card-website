/**
 * Created by Hira on 9/16/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  _id: String,
  name: String
});

module.exports = mongoose.model('Category', categorySchema);
