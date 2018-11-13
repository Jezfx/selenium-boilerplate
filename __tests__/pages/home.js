const { By } = require("selenium-webdriver");

const url = "http://google.com?hl=en-GB";

class HomePage {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      header: By.css("#gb"),
      buttonLogin: By.css("#gb_70"),
      accountInformation: By.xpath("//div[contains(text(), 'This account is managed by')]")
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