# Javascript / Puppeteer Runner



## IMPORTANT

IMPORTANT - This puppeteer script will not run without a version of chromium that
has NOT been compiled with the video/audio codecs. Chrome comes with them as standard
but Chromium does not.

You can download a copy of Chromium with those codecs here:
https://chromium.woolyss.com/ to query these routes.

You can then set the `executablePath` of puppeteer-core in the puppeteer settings
to point to this version of chromium.

Warning - If you do not do this, then chromium will not upload any videos because 
it will not recognise those file formats. Images will work, however.


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