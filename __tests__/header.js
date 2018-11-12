const { By, until } = require("selenium-webdriver");
const chai = require("chai");
chai.use(require("chai-as-promised"));
const { expect } = chai;

const HeaderComponent = require("./components/header");

const utils = require("./utils");
const config = require("./config");
const driverSetup = config.browser(process);

describe("Main Site Header", function() {
  let header;
  let driver;
  this.timeout(0);

  beforeEach(async () => {
    driver = await driverSetup.build();
    header = new HeaderComponent(driver);
    header.open();
  });

  afterEach(async () => {
    driver.quit();
  });

  it("should open the search modal", async () => {
    await header.clickSearch();
    await header.searchModalVisible();

    const visibility = await driver
      .findElement(header.locators.searchModal)
      .getCssValue("visibility");

    expect(visibility).to.equal("visible");
  });

  it("should show close text searching", async () => {
    await header.clickSearch();
    await header.searchModalVisible();

    const buttonText = await driver
      .findElement(header.locators.searchButton)
      .getText();

    expect(buttonText).to.contain("close");
  });

  it("should open the login modal", async () => {
    await driver.findElement(header.locators.loginButton).click();
    await utils.wait(500);

    const siteModalContainer = await driver.findElement(
      By.id("site-modal-container")
    );
    const headerText = await siteModalContainer
      .findElement(By.tagName("h2"))
      .getText();

    expect(headerText).to.equal("log in");
  });

  describe("Main Nav Links", () => {
    it("should navigate to news page", async () => {
      await driver.findElement(header.locators.newsLink).click();
      await driver.wait(until.urlContains("news"));

      const headerText = await driver
        .findElement(By.className("widget-heading"))
        .getText();

      expect(headerText).to.equal("recent editorial news");
    });

    it("should navigate trading account", async () => {
      await driver.findElement(header.locators.servicesDropDownLink).click();
      await driver.findElement(header.locators.tradingAccountLink).click();
      await driver.wait(until.urlContains("trading-account"));

      const headerText = await driver
        .findElement(By.className("text-jumbo"))
        .getText();

      expect(headerText).to.equal("trading account");
    });
  });
});
