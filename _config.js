const selenium = require("selenium-webdriver");
require("dotenv").config();

var capabilities = {
  browserName: "Chrome",
  browser_version: '71.0 beta',
  os: "OS X",
  os_version: "Mojave",
  "browserstack.local" : 'false',
  'browserstack.selenium_version' : '3.6.0',
  "browserstack.user": process.env.BROWSERSTACK_USERNAME,
  "browserstack.key": process.env.BROWSERSTACK_AUTOMATE_KEY
};

const browsers = {
  browserstack: new selenium.Builder()
    .usingServer("http://hub-cloud.browserstack.com/wd/hub")
    .withCapabilities(capabilities),
  chrome: new selenium.Builder().withCapabilities(
    selenium.Capabilities.chrome()
  ),
  firefox: new selenium.Builder().withCapabilities(
    selenium.Capabilities.firefox()
  )
};

const getBrowserFlag = process =>
  process.argv.find(arg =>
    Object.keys(browsers).find(key => arg.includes(key))
  );

exports.browser = process =>
  getBrowserFlag(process)
    ? browsers[getBrowserFlag(process).replace("--", "")]
    : browsers["chrome"]; // default to chrome
