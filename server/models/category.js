/**
 * Created by Hira on 9/16/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: String
});

module.exports = mongoose.model('Category', categorySchema);
