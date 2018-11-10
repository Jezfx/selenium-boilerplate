const { By, until } = require("selenium-webdriver");
const chai = require("chai");
chai.use(require("chai-as-promised"));
const { expect } = chai;

const HeaderComponent = require("./components/header");
const LoginModalComponent = require("./components/login-modal");

const utils = require("./_utils");
const config = require("./_config");
const driverSetup = config.browser(process);

describe("Login Modal", function() {
  let header;
  let driver;
  this.timeout(0);

  beforeEach(async () => {
    driver = await driverSetup.build();
    header = new HeaderComponent(driver);
    login = new LoginModalComponent(driver);

    header.open();
  });

  afterEach(async () => {
    driver.quit();
  });

  it("should navigate to trading login page", async () => {
    await header.openLoginModal(driver);

    const siteModalContainer = await driver.findElement(
      By.id("site-modal-container")
    );
    await siteModalContainer.findElement(By.className("btn-primary")).click();

    await utils.switchTab(driver);
    await driver.wait(until.urlContains("secure"));

    const headerText = await driver.findElement(By.tagName("h2")).getText();

    expect(headerText).to.equal("login to ii");
  });

  it("should navigate to the research account login", async () => {
    await header.openLoginModal(driver);

    const siteModalContainer = await driver.findElement(
      By.id("site-modal-container")
    );

    await siteModalContainer.findElement(By.css("p button")).click();

    await driver.wait(until.urlContains("login"));

    const authContainer = await driver
      .findElement(By.id("auth0-lock-container-1"));

    expect(authContainer).to.be.a("object");
  });
});
