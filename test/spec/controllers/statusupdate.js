'use strict';

describe('Controller: StatusupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('yookoreApp'));

  var StatusupdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatusupdateCtrl = $controller('StatusupdateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
