const { By, until } = require("selenium-webdriver");
const utils = require("../utils");

const url = "http://google.com?hl=en-GB";

class HomePage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      header: By.css("#gb"),
      buttonLogin: By.css("#gb_70"),
    }
  }

  open() {
    this.driver.get(url);
  }

  async clickLogin() {
    await this.driver.findElement(this.locators.buttonLogin).click();
  }
}

module.exports = HomePage;