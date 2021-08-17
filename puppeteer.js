var runner = (function () {

    // ┌──────────────────────────────────────────────────────────┐
    // │                                                          │
    // │                       Requirements                       │
    // │                                                          │
    // └──────────────────────────────────────────────────────────┘
    const puppeteer = require('puppeteer-core');


    // ┌──────────────────────────────────────────────────────────┐
    // │                                                          │
    // │                     Global Variables                     │
    // │                                                          │
    // └──────────────────────────────────────────────────────────┘
    
    let browser;

    let page;



    // ┌──────────────────────────────────────────────────────────┐
    // │                                                          │
    // │                    Puppeteer Settings                    │
    // │                                                          │
    // └──────────────────────────────────────────────────────────┘

    let puppeteer_settings = { 
        headless: true, 
        devtools: false,
        executablePath: "/usr/bin/google-chrome-stable",
        args: ['--no-sandbox']
    }

    // ┌─────────────────────────────────────────────────────────┐
    // │                                                         │
    // │                Update Puppeteer Settings                │
    // │                                                         │
    // └─────────────────────────────────────────────────────────┘
    function publicSetPuppeteerSettings(settings){
        puppeteer_settings = settings;
    }

    // ┌──────────────────────────────────────────────────────────┐
    // │                                                          │
    // │                       Run Function                       │
    // │                                                          │
    // └──────────────────────────────────────────────────────────┘
    function publicRun(){


        (async () => {


            /**
             * New puppeteer
             */
            try {
                console.log('Launch Puppeteer');
                browser = await puppeteer.launch(puppeteer_settings);
            } catch (err) {
                console.log('Error launching puppeteer : ' + err);
                return;
            } 





            /**
             * New Browser
             */
            try {
                console.log('create browser');
                const context = browser.defaultBrowserContext();
            } catch (err) {
                console.log('Error creating browser : ' + err);
                return;
            } 





            
            /**
             * New Page
             */
            try {
                console.log('create page');
                page = await browser.newPage();
                await page.setDefaultNavigationTimeout(30000);
                await page.setViewport({ width: 1200, height: 800 });
            } catch (err) {
                console.log('Error creating page : ' + err);
                return;
            } 





            /**
             * Done
             */
            try {
                console.log('Done');
                await page.waitForTimeout(20000);
                await browser.close();
            } catch (err) { 
                console.log('Error closing the browser : ' + err);
                return;
            }
        
        })();

    }


    // ┌─────────────────────────────────────────────────────────────────────────────┐
    // │                                                                             │
    // │ Make these things public:                                                   │
    // │                                                                             │
    // │ 1. puppeteer_settings object So you can update and change the defaults.     │
    // │                                                                             │
    // │ 2. IG_post object to update the default post values.                        │
    // │                                                                             │
    // │ 3. user() method to set the facebook username to login with.                │
    // │                                                                             │
    // │ 4. pass() method to login with.                                             │
    // │                                                                             │
    // │ 5. run() method to kick everything off.                                     │
    // │                                                                             │
    // │ 6. cookiefile is the path to the json file to store all cookies.            │
    // │                                                                             │
    // └─────────────────────────────────────────────────────────────────────────────┘
    return {
        puppeteer_settings,     
        run: publicRun,
        settings: publicSetPuppeteerSettings,
    };

})();

// ┌─────────────────────────────────────────────────────────┐
// │                                                         │
// │                Export the runner variable.              │
// │        Use the require() function to import it.         │
// │                                                         │
// │ https://stackoverflow.com/questions/950087/how-do-i-inc │
// │    lude-a-javascript-file-in-another-javascript-file    │
// │                                                         │
// └─────────────────────────────────────────────────────────┘
module.exports = { runner };


runner.run();