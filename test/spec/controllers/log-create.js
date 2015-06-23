'use strict';

describe('Controller: LogCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var LogCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogCreateCtrl = $controller('LogCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
