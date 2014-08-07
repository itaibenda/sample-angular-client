'use strict';

(function () {

  /* @ngInject */
  function MainController($window, posts) {
    var _self = this;

    this.reloadPosts = function () {
      this.posts = posts.getResource();
//      posts.get()
//        .success(function (data) {
//          _self.posts = data;
//        })
//        .error(function () {
//          $window.alert('w00t!');
//        });
    };

    this.saveNewPost = function (title, body) {
      posts.save(title, body)
        .success(function () {
          $window.alert('Saved successfully!');
          _self.reloadPosts();
        })
        .error(function () {
          $window.alert('Oops! Failed to save the new post');
        });
    };

    this.reloadPosts();
  }

  angular
    .module('sampleAngularClientAppInternal')
    .controller('MainController', MainController);

})();
