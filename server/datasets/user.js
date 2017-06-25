var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema(
  {
    username: {type: String},
    role: { type:String }
    
  }
);

//Export model
module.exports = mongoose.model('user', userSchema);