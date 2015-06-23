'use strict';

describe('Controller: LogEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var LogEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogEditCtrl = $controller('LogEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
