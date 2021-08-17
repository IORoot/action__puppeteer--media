# Javascript / Puppeteer Runner

This github action was born out of slight frustration that:

1. The chromium version that puppeteer uses does not have video codecs installed.
2. Most of the puppeteer actions on the marketplace lack any decent documentation. Which meant it was hard to get anything running.

## Demo Usage Repository

You can see a demonstration of this action in use at: 
https://github.com/IORoot/puppeteer__runner--demo


## Note about Video Codecs in Chromium.

IMPORTANT - Some puppeteer scripts will not run correctly when using a version of chromium that
has NOT been compiled with the video/audio codecs. Chrome comes with them as standard
but Chromium does not.

Manually, You can download a copy of Chromium with those codecs here:
https://chromium.woolyss.com/ to query these routes.

You can then set the `executablePath` of puppeteer-core in the puppeteer settings
to point to this version of chromium.

Warning - If you do not do this, then chromium will not upload any videos because 
it will not recognise those file formats. Images will work, however.

Why did I need this? Well, I had created a puppeteer script that was navigating to
the facebook creator studio and uploading an instagram video. However, it would not
work because chrome couldn't handle the MP4 files being uploaded. So a different 
version was required.

```php
/**
 * ISSUE - CHROMIUM NOT ABLE TO UPLOAD VIDEO
 * 
 * https://github.com/puppeteer/puppeteer/issues/291
 * 
 * Chromium cannot upload video, however, Chrome can. This is 
 * because chromium is compiled without any codec support. Therefore,
 * use a chromium version WITH support or use Chrome.
 * 
 * You can download a chromium version here:
 * https://chromium.woolyss.com/#mac-stable-ungoogled-marmaduke
 * 
 * Change the executablePath to a google chrome instance
 * executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
 */
 ```

