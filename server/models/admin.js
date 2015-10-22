/**
 * Created by Hira on 10/19/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('Admin', adminSchema);

