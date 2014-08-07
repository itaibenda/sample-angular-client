'use strict';

describe('Service: postsStoreRestful', function () {

  // load the service's module
  beforeEach(function () {
    module('sampleAngularClientAppInternal');

    //add your mocks here
  });

  // instantiate service
  var postsStoreRestful;
  beforeEach(inject(function (_postsStoreRestful_) {
    postsStoreRestful = _postsStoreRestful_;
  }));

//  it('should do something', function () {
//    expect(postsStoreRestful.someMethod()).toBe(42);
//  });

});
