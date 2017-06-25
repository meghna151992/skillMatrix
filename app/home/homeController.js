(function(){
    
    angular.module("Skill").controller("homeController" , ['$scope' , '$state' , '$http' , '$rootScope' , function($scope,$state,$http,$rootScope){
     
         var userdata=JSON.parse(localStorage.getItem("user-data"));
        $scope.user=userdata.username;
        
        $scope.projectsList;
    
         $rootScope.project={};        
         $http.get("api/user/getRole/" + userdata.username).then(function(response){
            console.log(response.data);
            $scope.role=response.data;
            
             
          if($scope.role === "PM"){
            
                $scope.isPM=true;
              $http.get("api/project/getManagerProjects/" + userdata.username ).then(function(response){
                  console.log(response.data.projectList);
                  $scope.projectsList=response.data.projectList;
              },function(){});
    }else 
        {
        
            $scope.isPM=false;
            $http.get("api/project/getMemberProjects/" + userdata.username ).then(function(response){
                 
                  console.log(response.data.projectList);
                  $scope.projectsList=response.data.projectList;
              },function(){});

        }
        },
                                                      function(response){
            console.error(response);
        });
     
        
        
    }]);
    
  
    
    
})();