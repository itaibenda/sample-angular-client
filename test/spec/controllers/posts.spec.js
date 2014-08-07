'use strict';

describe('Controller: PostsController', function () {

  // load the controller's module
  beforeEach(function () {
    module('sampleAngularClientAppInternal');

    //add your mocks here
  });

  var PostsController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsController = $controller('PostsController', {
      $scope: scope
    });
  }));
});
