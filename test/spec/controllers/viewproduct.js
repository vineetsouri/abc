'use strict';

describe('Controller: ViewproductCtrl', function () {

  // load the controller's module
  beforeEach(module('abckidsworldApp'));

  var ViewproductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewproductCtrl = $controller('ViewproductCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewproductCtrl.awesomeThings.length).toBe(3);
  });
});
