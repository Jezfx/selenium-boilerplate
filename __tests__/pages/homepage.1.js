const { By, until } = require("selenium-webdriver");

const url = "http://google.com";

class HeaderComponent {

  constructor(driver) {
    this.driver = driver;
    this.locators = {
      header: By.tagName("header"),
      newsLink: By.linkText("news"),
      loginButton: By.css("[data-testid='site-header-auth-buttons'] > button"),
      tradingAccountLink: By.linkText("trading account"),
      searchButton: By.css('[data-testid="search-nav-trigger"]'),
      searchModal: By.css('[data-testid="site-search-modal-container"]'),
      servicesDropDownLink: By.css('[data-testid="main-nav-list"] > li span')
    }
  }

  open() {
    this.driver.get(url);
  }

  clickSearch() {
    this.driver.findElement(this.locators.searchButton).click();
  }

  async searchModalVisible() {
    await this.driver.wait(until.elementIsVisible(
      this.driver.findElement(this.locators.searchModal)
    ));
  }
}

module.exports = HeaderComponent;