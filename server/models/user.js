
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema( {
  firstName : {type: String, default:''},
  lastName : {type: String, default:''},
  userName : {type: String, allowNull: false},
  email : {type: String, allowNull: false},
  password : {type: String, allowNull: false},
  confirmPassword : {type: String, allowNull: false},

});

module.exports = mongoose.model('User', userSchema);


