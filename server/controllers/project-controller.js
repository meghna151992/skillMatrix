var projects=require('../datasets/project');
module.exports.addProject=function(req,res){
    
     var project = new projects({
        project_Manager: req.body.manager, 
        project_name: req.body.projectName, 
        project_id: req.body.projectID,
        project_members: req.body.member
    });
    
    
    console.log("projecct" + project);
    project.save(function (err) {
            if (err) { return next(err); }
            //successful - redirect to new book record.
            console.log("success");
        res.send("success");
        });
}

module.exports.getManagerProjects=function(req,res){
    console.log(req.params.username);
   
    projects.find( { project_Manager : req.params.username},function(err , results){
        
        if(err){
            console.log(err);
        }
        else{
            res.json({projectList : results});
        }
    });
};
module.exports.getMemberProjects=function(req,res){
    console.log(req.params.username);
   
    console.log("priyankas projects ");
    projects.find({}).populate( 'user', null, { username: { $in: [ req.params.username] } } ).exec(function(err,results){
        if(err){
            console.log(error);
        }
        else 
            {
                res.json({projectList:results});
            }
    });
    
    
};