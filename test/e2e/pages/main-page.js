'use strict';

function MainPage() {
  this.navigate = function () {
    browser.get('/');
  };

  this.getNewPostPanel = function () {
    return $('.new-post');
  };

  this.getPosts = function () {
    return $$('.post');
  };
}

module.exports = MainPage;
