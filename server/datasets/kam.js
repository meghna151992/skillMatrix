var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kamSchema = Schema(
  {
    kamname: {type: String},
    kamDetail:[{type: Schema.ObjectId, ref: 'kamDetail'}]
    
  }
);

//Export model
module.exports = mongoose.model('kam', kamSchema);