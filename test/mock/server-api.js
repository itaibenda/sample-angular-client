'use strict';

angular.module('sampleAngularClientAppMocks', ['ngMockE2E'])
  .run(function ($httpBackend, serverMode) {
    var mockPosts = [];
    for (var i = 0; i < 100 ; i++) {
      mockPosts.push({ title: 'one', body: 'two', id: i });
    }

    if (serverMode.fail) {
      $httpBackend.whenGET(/\/_api\/posts/).respond(500);
    } else {
      $httpBackend.whenGET(/\/_api\/posts/).respond(mockPosts);
    }

    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
  })
  .value('serverMode', {});
