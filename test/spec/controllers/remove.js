'use strict';

describe('Controller: RemoveCtrl', function () {

  // load the controller's module
  beforeEach(module('abckidsworldApp'));

  var RemoveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RemoveCtrl = $controller('RemoveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RemoveCtrl.awesomeThings.length).toBe(3);
  });
});
