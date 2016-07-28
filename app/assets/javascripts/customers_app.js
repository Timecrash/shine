// In the beginning, there was var app...
var app = angular.module('customers', ['ngRoute', 'ngResource', 'templates']);

// Router
app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    controller: "CustomerSearchController",
    templateUrl: "customer_search.html"
  }).when("/:id", {
    controller: "CustomerDetailController",
    templateUrl: "customer_detail.html"
  });
}]);

// Controllers
app.controller("CustomerSearchController", ["$scope","$http", "$location", 
                                    function($scope , $http ,  $location) {
  var page = 0;
  $scope.customers = [];
  
  // Controller methods
  $scope.search = function(searchTerm) {
    if (searchTerm.length < 3) { return; }
    
    $http.get("/customers.json",
             {"params": {"keywords": searchTerm, "page": page}}
             ).then(function(response) {
               $scope.customers = response.data;
             }, function(response) {
               alert("There was a problem: " + response.status);
             });
  };
  
  $scope.previousPage = function() {
   if (page > 0) {
     page = page - 1;
     $scope.search($scope.keywords);
   }
  };
  
  $scope.nextPage = function() {
   page += 1;
   $scope.search($scope.keywords);
  };
  
  $scope.viewDetails = function(customer) {
    $location.path("/" + customer.id);
  };
}]);

app.controller("CustomerDetailController", ["$scope", "$resource", "$routeParams",
                                    function($scope ,  $resource ,  $routeParams) {
  var customerId = $routeParams.id;
  var Customer = $resource('/customers/:customerId.json');
  
  $scope.customer = Customer.get({"customerId": customerId});
}]);