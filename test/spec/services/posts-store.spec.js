'use strict';

describe('Service: postsStore', function () {

  var windowMock;
  // load the service's module
  beforeEach(function () {
    module('sampleAngularClientAppInternal');

    windowMock = {
      alert: jasmine.createSpy('onAlert')
    };
    module({
      $window: windowMock
    });
  });

  // instantiate service
  var postsStore, $httpBackend;
  beforeEach(inject(function (_postsStore_, _$httpBackend_) {
    postsStore = _postsStore_;
    $httpBackend = _$httpBackend_;
  }));

  it('should do something', function () {
    $httpBackend.expectGET(/\/_api\/posts\//).respond(200, [{
      foo: 'bar'
    }]);

    var posts = postsStore.get();
    expect(posts).toEqual([]);
    $httpBackend.flush(1);
    expect(posts).toEqual([{ foo: 'bar' }]);
  });

  it('should handle request failure', function () {
    $httpBackend.expectGET(/\/_api\/posts\//).respond(500);

    $httpBackend.flush(1);
    expect(windowMock.alert).toHaveBeenCalledWith('oops!');
  });

  describe('after first request', function () {
    beforeEach(function () {
      $httpBackend.expectGET(/\/_api\/posts\//).respond(200, [{
        foo: 'bar'
      }]);

      $httpBackend.flush(1);
    });
  });
});
