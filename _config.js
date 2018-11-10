const selenium = require("selenium-webdriver");

var capabilities = {
  browserName: "iPhone",
  device: "iPhone 7",
  realMobile: "true",
  os_version: "10.3",
  "browserstack.user": "",
  "browserstack.key": ""
};

const browsers = {
  browserstack: new selenium.Builder()
    .usingServer("http://hub-cloud.browserstack.com/wd/hub")
    .withCapabilities(capabilities),
  chrome: new selenium.Builder().withCapabilities(
    selenium.Capabilities.chrome()
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
