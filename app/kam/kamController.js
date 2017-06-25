(function(){
    
    angular.module("Skill").controller("kamController" , ['$scope' , '$state' , '$http' , '$rootScope' , function($scope,$state,$http,$rootScope){
    console.log("projectId" + $rootScope.project.id);
        
        $scope.project={
            kamName:"",
            projectId:""
        }
        $scope.kam={
            areaname:"",
            requiredLevel:"",
            kamName:""
        };
        $scope.kamAdded=false;
        $scope.project.projectId=$rootScope.project.id;
        $scope.createKAM=function(){
            $http.post("api/kam/addKam" , $scope.project).then(function(response) {},function(response){});
            $scope.kamAdded=true;
        }
        
        $scope.addArea=function(){
            $scope.kam.kamName=$scope.project.kamName;
            $http.post("api/kam/addArea" , $scope.kam).then(function(response){
                $scope.kam.areaname="";
                $scope.kam.requiredLevel="";
            },function(response){});
            
        }
    }]);
})();