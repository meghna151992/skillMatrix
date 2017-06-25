var kams=require('../datasets/kam');
var projects=require('../datasets/project');
var kamdetails=require('../datasets/kamDetail');
module.exports.addKam=function(req,res){
    console.log("helllllllllllllllo");
    console.log(req.body.projectId);
    console.log(req.body.kamName);
    
    var kam=new kams({
        kamname:req.body.kamName
    }); 
    
    kam.save(function (err) {
            if (err) { return next(err); }
        
        kams.find({kamname:req.body.kamName} ,function(err,results){
            
            id= results[0]._id;
            console.log(id);
            
            projects.update({_id: req.body.projectId}, {
    kam: id 
    
}, function(err, numberAffected, rawResponse) {
   //handle it
})
            
            
        });
        
            console.log("success");
        res.send("success");
        });
    
}

module.exports.addArea=function(req,res){
    console.log("hiiiiiiiii");
    console.log(req.body.areaname);
    console.log(req.body.kamName);
    console.log(req.body.requiredLevel);
     
    var kamDetail=new kamdetails({
        areaName:req.body.areaname,
        requiredLevel:req.body.requiredLevel
        
    });
    kamDetail.save(function(err){
        if(err){return next(err); }
        else {
            kamdetails.find({areaName:req.body.areaname} ,function(err,results){
                  id=results[0]._id;
                console.log(id);
            
                
            kams.update({ kamname: req.body.kamName }, 
           { $push: { kamDetail: id } },
    function(err, numberAffected ,rawResponse){
                
                
            }
);    
            })
            
            
            
        }
        
    });
    
}