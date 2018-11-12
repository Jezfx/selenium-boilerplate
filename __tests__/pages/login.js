const { By } = require("selenium-webdriver");
const utils = require("../utils");

const url = "https://accounts.google.com?hl=en-GB";

const credentials = {
  email: "emailaddress",
  password: "password"
};

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.locators = {
      form: By.tagName("form"),
      inputEmail: By.name("identifier"),
      inputPassword: By.name("password"),
      buttonNext: By.xpath("//span[contains(text(), 'Next')]"),
      linkPrivacy: By.linkText("Privacy")
    };
  }

  open() {
    this.driver.get(url);
  }

  async login() {
    await this.driver
      .findElement(this.locators.inputEmail)
      .sendKeys(credentials.email);
    utils.wait(2000); // wait for the animation
    await this.driver.findElement(this.locators.buttonNext).click();

    // shouldn't have to do this but it seems to find the element before WebDriver can interact with it
    await utils.wait(4000);

    await utils
      .waitFind(this.driver, this.locators.inputPassword)
      .sendKeys(credentials.password);
    await this.driver.findElement(this.locators.buttonNext).click();
  }

  async openPrivacyPage() {
    await this.driver.findElement(this.locators.linkPrivacy).click();
    await utils.wait(2000);
    await utils.switchTab(this.driver);
  }
}

module.exports = LoginPage;
