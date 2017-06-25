var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var app=express();
var multiParty=require('connect-multiparty');
var multiPartMiddleware=multiParty();
var authenticationController=require('./server/controllers/authentication-controller');
var userController=require('./server/controllers/user-controller');
var projectController=require('./server/controllers/project-controller');
var kamController=require('./server/controllers/kam-controller');

                          
                          
//connnecting to datatbase
mongoose.connect("mongodb://localhost/skillMatrix");

app.use(multiPartMiddleware);
app.use(bodyParser.json());
app.use('/app', express.static(__dirname+"/app"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));

//authentication
app.post('/api/user/login',authenticationController.login);

//user
app.get('/api/user/getUsers' , userController.getUsers);
app.get('/api/user/getRole/:username' , userController.getRole);

//Project
app.post("/api/project/addProject" , projectController.addProject);
app.get("/api/project/getManagerProjects/:username" , projectController.getManagerProjects);
app.get("/api/project/getMemberProjects/:username" , projectController.getMemberProjects);

//kam
app.post("/api/kam/addKam" , kamController.addKam);
app.post("/api/kam/addArea",kamController.addArea);

app.get('/',function(req,res){
    res.sendFile( __dirname +  '/index.html');
});


app.listen(3000 , function(){
   console.log("this is working"); 
});