'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(function () {
    module('sampleAngularClientAppInternal');

    //add your mocks here
  });

  var MainController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the controller', function () {
//    expect(1).toBe(1);
//  });
});
