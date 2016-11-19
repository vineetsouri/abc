'use strict';

describe('Controller: UploadproductsCtrl', function () {

  // load the controller's module
  beforeEach(module('abckidsworldApp'));

  var UploadproductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadproductsCtrl = $controller('UploadproductsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UploadproductsCtrl.awesomeThings.length).toBe(3);
  });
});
