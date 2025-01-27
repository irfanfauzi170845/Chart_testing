/** @type {import('jest').Config} */
const globalVariable = require('./global-variables.json');


const config = {
    testEnvironment: 'node',
    globalSetup: "./config/global-setup.js",
    globalTeardown: "./config/global-teardown.js",
    testSequencer: './config/custom-sequencer.js',
    globals: globalVariable,
    reporters: [
        "default",
        "jest-html-reporters"
    ],
    setupFilesAfterEnv: [
        "jest-expect-message"
    ]
};

module.exports = config;