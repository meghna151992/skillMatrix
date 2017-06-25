var authenticates=require('../datasets/authenticate');
module.exports.login=function(req,res){
    console.log(req.body);
   
    authenticates.find(req.body , function(err , results){
        
        if(err){
            console.log(err);
        }
        else{
            console.log(results);
            if(results && results.length===1){
                var result=results[0];
                res.json({username:req.body.username , id:result._id});
            } else 
                {
                    res.json({message : "Record does not exist"});
                }
        }
    });
}