'use strict';

describe('Directive: headerDirective', function () {

  // load the directive's module
  beforeEach(module('abckidsworldApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<header-directive></header-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the headerDirective directive');
  }));
});
