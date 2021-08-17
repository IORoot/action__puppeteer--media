/**
 * Add this to the bottom of the creator_studio.js
 * file and run in vscode to check the puppeteer steps.
 */

const puppeteer = require ('./puppeteer.js');


// puppeteer.runner.settings({ 
//     headless: false, 
//     devtools: false,
//     executablePath: "/usr/bin/google-chrome-stable",
//     args: ['--no-sandbox']
// });

puppeteer.runner.run();