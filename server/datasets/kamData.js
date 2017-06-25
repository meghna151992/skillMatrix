var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kamDataSchema = Schema(
  {
    currentlevel: {type: Number},
      
    user:{type: Schema.ObjectId, ref: 'user'}
    
  }
);

//Export model
module.exports = mongoose.model('kamData', kamDataSchema);