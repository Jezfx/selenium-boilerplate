const { By, until } = require("selenium-webdriver");

class LoginModalComponent {

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

  async searchModalVisible() {
    await this.driver.wait(until.elementIsVisible(
      this.driver.findElement(this.locators.searchModal)
    ));
  }

  async openModal() {
    
  }
}

module.exports = LoginModalComponent;