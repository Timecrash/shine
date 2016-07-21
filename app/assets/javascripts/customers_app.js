var app = angular.module('customers', []);

app.controller("CustomerSearchController", [
               "$scope","$http",
       function($scope , $http) {
         $scope.customers = [];
         $scope.search = function(searchTerm) {
           $http.get("/customers.json", {"params": {"keywords": searchTerm}}
                    ).then(function(response) {
                      $scope.customers = response.data;
                    }, function(response) {
                      alert("There was a problem: " + response.status);
                    });
         }
       }
]);