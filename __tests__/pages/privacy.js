const { By } = require("selenium-webdriver");

class PrivacyPage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      header: By.linkText("Privacy & Terms"),
    }
  }
}

module.exports = PrivacyPage;