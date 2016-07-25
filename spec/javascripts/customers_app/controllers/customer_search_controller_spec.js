describe("CustomerSearchController", function() {
  describe("Initialization", function() {
    var scope       = null,
        controller  = null,
        httpBackend = null,
        serverResults = [
          {
            id: 123,
            first_name: "Bob",
            last_name: "Jones",
            email: "bjones@foo.net",
            username: "jonsey"
          },
          {
            id: 456,
            first_name: "Bob",
            last_name: "Johnsons",
            email: "johnboy@bar.info",
            username: "bobbyj"
          }
        ];
        
    beforeEach(module("customers"));
    
    beforeEach(function() {
      httpBackend.when('GET','/customers.json?keywords=bob&page=0').
                  respond(serverResults);
    });
        
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      scope       = $rootScope.$new();
      httpBackend = $httpBackend;
      controller  = $controller("CustomerSearchController", {
        $scope: scope
      });
    }));
    
    it("defaults to an empty customer list", function() {
      expect(scope.customers).toEqualData([]);
    });
  });
});