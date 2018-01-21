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
    app: ['test/e2e/**/app.spec.ts']
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 60000
  }
};
