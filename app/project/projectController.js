(function(){
    
    angular.module("Skill").controller("projectController" , ['$scope' , '$state' , '$http' , function($scope,$state,$http){
        
        $scope.project={
            projectName:"",
            projectID:"",
            member:"",
            manager:""
        };
        $http.get('api/user/getUsers').then(function(response){
            
            console.log(response.data.userslist);
            $scope.users=response.data.userslist;
            var userdata=JSON.parse(localStorage.getItem("user-data"));
             
            $scope.project.manager=userdata.username;        
            $scope.submit=function(){
            console.log($scope.project);

                $http.post("api/project/addProject" , $scope.project ).then(function(response){} , function(response){
                    console.error(response);
                });
                
            }
                
     
            
            
            
            
            
            
            
            
            
            
        },function(response){
            console.error(response);
        });
        
      
    }]);
})();