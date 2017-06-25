var mongoose=require('mongoose');
module.exports=mongoose.model('authenticate',{
    
    username:String,
    password:String
});
