(function(){
    
    angular.module("Skill").controller("navigationController" , ['$scope' , '$state' , '$http' , function($scope,$state,$http){
        
        $scope.loginUser=function(){
            console.log($scope.login);
            $http.post("api/user/login" , $scope.login).then(function(response){
                console.log(response.data);
                if(response.data.message){
                   $scope.message=response.data.message; 
                }
                else {
                    localStorage.setItem("user-data",JSON.stringify(response.data));
                      $scope.isLoggedIn=true;
                      $state.go('home');
                }
            },
                                                            
                                                            
            function(response){
                console.error(response);
            }
            );
        }
        
    }]);
})();