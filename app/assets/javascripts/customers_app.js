var app = angular.module('customers', []);

app.controller("CustomerSearchController", ["$scope","$http", function($scope , $http) {
  var page = 0;
  $scope.customers = [];
  
  $scope.search = function(searchTerm) {
    $http.get("/customers.json",
             {"params": {"keywords": searchTerm, "page": page}}
             ).then(function(response) {
               $scope.customers = response.data;
             }, function(response) {
               alert("There was a problem: " + response.status);
             });
  }
  
  $scope.previousPage = function() {
   if (page > 0) {
     page = page - 1;
     $scope.search($scope.keywords);
   }
  }
  
  $scope.nextPage = function() {
   page += 1;
   $scope.search($scope.keywords);
  }
}]);