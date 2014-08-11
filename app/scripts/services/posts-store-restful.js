'use strict';

(function () {

  /* @ngInject */
  function PostsStoreRestful($resource, $window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _postsResource = $resource('/_api/posts/');
    var _posts;

    function query() {
      _posts = _postsResource.query();

      _posts.$promise.then(angular.noop, function () {
        $window.alert('boohoo :(');
        //_posts = [{title: 'crap', body: 'shit', id: 0}];
      });
    }

    this.get = function () {
      return _posts;
    };

    query();
  }

  angular
    .module('sampleAngularClientAppInternal')
    .service('postsStoreRestful', PostsStoreRestful);

})();
