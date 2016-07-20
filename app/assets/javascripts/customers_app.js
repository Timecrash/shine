var app = angular.module('customers', []);

app.controller("CustomerSearchController", [
               "$scope",
       function($scope) {
         $scope.search = function(searchTerm) {
           $scope.searchedFor = searchTerm;
         }
       }
]);