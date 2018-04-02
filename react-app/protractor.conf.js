let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    directConnect: true,
    baseUrl: 'http://localhost:3000/',
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        app: ['tests/e2e/app.spec.js']
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
