/**
 * Created by sohaib on 1/12/2015.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  firstName : {type: String, default:''},
  lastName : {type: String, default:''},
  username : {type: String, allowNull: false},
  email : {type: String, allowNull: false},
  password : {type: String, allowNull: false},
  confirmPassword : {type: String, allowNull: false},
  //city : {type: String, default:''}
  //address : {type: String, default:''},
  //state : {type: String, default:''},
  //country : {type: String, default:''},
  //userType : {type: String, allowNull: false, default: 'agent'} //['admin', 'agent']
});
