var users=require('../datasets/user');
module.exports.getUsers=function(req,res){
    console.log(req.body);
   
    users.find( { role : 'D'},function(err , results){
        
        if(err){
            console.log(err);
        }
        else{
            res.json({userslist : results});
        }
    });
};


module.exports.getRole=function(req,res){
   console.log("he");
    console.log(req.params.username);
    
       users.findOne( { username:req.params.username }, function(err , results){
        console.log(results);
        if(err){
            console.log(err);
        }
        else{
            res.send(results.role);
        }
    });
}