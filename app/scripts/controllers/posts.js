'use strict';

(function () {

  /* @ngInject */
  function PostsController(postsStoreRestful) {
    this.posts = postsStoreRestful.get();

    this.saveNewPost = function () {
      postsStoreRestful.post(this.newTitle, this.newBody);
    };
  }

  angular
    .module('sampleAngularClientAppInternal')
    .controller('PostsController', PostsController);

})();
