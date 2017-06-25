var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kamDetailSchema = Schema(
  {
    areaName: {type: String},
    requiredLevel: {type : Number},  
    kamData:{type: Schema.ObjectId, ref: 'kamData'}
    
  }
);

//Export model
module.exports = mongoose.model('kamDetail', kamDetailSchema);