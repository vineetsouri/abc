'use strict';

describe('Controller: AbckidsworldCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('abckidsworldApp'));

  var AbckidsworldCategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AbckidsworldCategoryCtrl = $controller('AbckidsworldCategoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AbckidsworldCategoryCtrl.awesomeThings.length).toBe(3);
  });
});
