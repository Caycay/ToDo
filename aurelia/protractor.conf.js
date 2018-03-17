let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  directConnect: true,
  baseUrl: 'localhost:9000/',
  capabilities: {
    'browserName': 'chrome'
  },
  plugins: [{
    package: 'aurelia-protractor-plugin'
  }],
  suites: {
    app: ['test/e2e/dist/**/app.spec.js']
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 60000
  },

  onPrepare: function () {

    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'none',
      displayFailuresSummary: true,
      displayPendingSummary: true,
      displaySuccessesSummary: false,
      displaySuccessfulSpec: true,
      displayFailedSpec: true,
      displayPendingSpec: true,
      displaySpecDuration: false,
      displaySuiteNumber: false,
      colors: {success: 'green', failure: 'red', pending: 'yellow'},
      prefixes: {success: '✓ ', failure: '✗ ', pending: '* '},
      customProcessors: []
    }));
    browser.driver.manage().window().maximize();

    return global.browser.getProcessedConfig().then(function (config) {
    });
  }
};
