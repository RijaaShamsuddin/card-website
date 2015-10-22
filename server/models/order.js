/**
 * Created by Hira on 10/22/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema( {
  user_id : {type: String},
  address : {type: String, allowNull: false},
  mobile_no : {type: String, allowNull: false},
  phone_no: {type: String},
  total_bill: {type: Number},
  items: [],
  status: {type: String},
  date_of_order: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Order', orderSchema);
