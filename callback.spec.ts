let browser = 'chrome'
let version

import { chromium } from 'playwright';
(async () => {

  let browser = await chromium.launch();
  let version = browser.version();
  console.log(`Browser version: ${version}`);
    
})();

function checkBrowserVersion(browser, callback) {0
    setTimeout(() => {
        console.log("Using callback :" + browser + " version is :")
        callback()
    }, 2000);
}

function logBrowserVersion() {console.log("144.0.7559.133 ")}

checkBrowserVersion(browser, logBrowserVersion)