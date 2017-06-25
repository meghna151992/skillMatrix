var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var projectSchema = Schema(
  {
    project_Manager: {type: String},
    project_name: { type:String },
    project_id:{type:String},
    project_members:{type: Schema.ObjectId, ref: 'user'}  ,
    kam:{type : Schema.ObjectId , ref : 'kam'}
  }
);

//Export model
module.exports = mongoose.model('project', projectSchema);