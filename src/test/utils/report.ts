import reporter, { Options } from 'cucumber-html-reporter';

const options: Options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        Project: 'QA Playwright Cucumber',
        Platform: process.platform,
        Executed: new Date().toLocaleString()
    }
};

reporter.generate(options);