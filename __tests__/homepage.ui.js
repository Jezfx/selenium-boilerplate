require("selenium-webdriver");
const chai = require("chai");
chai.use(require("chai-as-promised"));
const { expect } = chai;

const Home = require("./pages/home");
const Login = require("./pages/login");

const config = require("../_config");
const utils = require("../_utils");

const driverSetup = config.browser(process);

describe("Home Page", () => {
  let driver;

  beforeEach(async () => {
    driver = await driverSetup.build();

    home = new Home(driver);
    login = new Login(driver);

    await home.open();
  });

  afterEach(async () => {
    driver.quit();
  });

  describe("Header", () => {
    it("should exist", async () => {
      const header = await driver.findElement(home.locators.header);
      expect(header).to.be.a("object");
    });

    it("should be able to log in", async () => {
      await home.clickLogin();
      await login.login();
      const loggedInText = await utils.waitFind(driver, home.locators.accountInformation);
      expect(loggedInText).to.be.a("object");
    });
  });
});
