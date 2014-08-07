'use strict';

(function () {

  /* @ngInject */
  function PostsStore($http, $window) {
    var API_URL = '/_api/posts/';
    var _posts = [];

    function query() {
      return $http.get(API_URL)
        .success(function (data) {
          angular.copy(data, _posts);
        })
        .error(function () {
          $window.alert('oops!');
        });
    }

    this.get = function () {
      return _posts;
    };

    this.post = function (title, body) {
      return $http.post(API_URL, {
        title: title,
        body: body,
        userId: 1
      }).success(function () {
        query();
      }).error(function () {
        $window.alert('w00t!');
      });
    };

    query();
  }

  angular
    .module('sampleAngularClientAppInternal')
    .service('postsStore', PostsStore);

})();
