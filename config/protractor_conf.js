const path = require('path');

const yargs = require('yargs')
    .option('tags', {
        alias: 't',
        default: '@test',
        describe: 'Choose a test',
        choices: ['@test', '@production'],
        type: 'string',
    })
    .option('instances', {
        alias: 'i',
        default: 1,
        describe: 'Choose number of instances to start test',
        type: 'number',
    })
    .option('keyword', {
        alias: 'kw',
        default: 'safemoon',
        describe: 'Enter a keyword of crypto',
        type: 'string',
    })
    .help()
    .argv;

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: ['../features/coinmarket.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances,
        browserName: 'firefox',
    },
    directConnect: true,
    cucumberOpts: {
        require: ['../step_defenitions/*.js'],
        tags: yargs.tags,
    },
    onPrepare: () => {
        global.keyword = yargs.keyword;
        return browser.waitForAngularEnabled(false);
    },
};