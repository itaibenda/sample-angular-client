'use strict';

require('../lib/matchers.protractor.js');
var MainPage = require('../pages/main-page.js');

describe('sampleAngularClientApp Main Page', function () {
  var mainPage;

  beforeEach(function () {
    mainPage = new MainPage();
    browser.addMockModule('sampleAngularClientAppMocks', function () {
    });
  });

  afterEach(function () {
    browser.removeMockModule('sampleAngularClientAppMocks');
  });

  it('should load successfully', function () {
    mainPage.navigate();
    expect(mainPage.getPosts().count()).toBe(100);
    expect(mainPage.getPosts().get(0).$('.title').getText()).toBe('one');
  });

  describe('fail server handling', function () {
    beforeEach(function () {
      browser.addMockModule('sampleAngularClientAppMocks', function () {
        angular.module('sampleAngularClientAppMocks')
          .value('serverMode', { fail: true });
      });
    });

    it('should fail', function () {
      mainPage.navigate();

      /* wait for the alert to open */
      browser.wait(function () {
        return browser.switchTo().alert().then(
          function () { return true; },
          function () { return false; }
        );
      });

      var alertDialog = browser.switchTo().alert();
      expect(alertDialog.getText()).toEqual('boohoo :(');
      alertDialog.accept();
    });
  });
});
