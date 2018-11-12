const { By } = require("selenium-webdriver");

class PrivacyPage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      h1: By.css("h1:last-child"),
    }
  }
}

module.exports = PrivacyPage;