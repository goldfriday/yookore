'use strict';

describe('Controller: ActivitystreamCtrl', function () {

  // load the controller's module
  beforeEach(module('yookoreApp'));

  var ActivitystreamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitystreamCtrl = $controller('ActivitystreamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
