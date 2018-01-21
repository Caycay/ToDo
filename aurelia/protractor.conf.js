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
  }
};
