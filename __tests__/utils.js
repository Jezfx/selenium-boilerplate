const { until } = require("selenium-webdriver");

exports.wait = require("util").promisify(setTimeout);

exports.switchTab = driver => {
  const handlePromise = driver.getAllWindowHandles();

  handlePromise.then(function(handles) {
    var popUpWindow = handles[1];

    driver.switchTo().window(popUpWindow);
  });
};

exports.waitFind = (driver, locator) =>
  driver.findElement(async () => {
    await driver.wait(until.elementLocated(locator));
    return driver.findElement(locator);
  });
