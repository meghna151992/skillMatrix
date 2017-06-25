(function(){
    
    angular.module("Skill", ['ui.router'] )
                            .config(function($stateProvider){
                                  $stateProvider
                                        .state('login',{
                                          url:"",
                                          templateUrl:"app/Navigation/navigation.html",
                                          controller:"navigationController"
                                         })
          
                                      .state('home',{
                                          url:"/home",
                                          templateUrl:"app/home/home.html",
                                          controller:"homeController"
                                         })
                                   .state('addProject',{
                                          url:"/addProject",
                                          templateUrl:"app/project/addProject.html",
                                          controller:"projectController"
                                         })
        
                                     .state('kam',{
                                          url:"/addKam",
                                          templateUrl:"app/kam/kam.html",
                                          controller:"kamController"
                                         })
                                            
    });   

    
    
})();