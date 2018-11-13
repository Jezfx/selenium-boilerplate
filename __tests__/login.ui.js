require("selenium-webdriver");

const chai = require("chai");
chai.use(require("chai-as-promised"));
const { expect } = chai;

const Login = require("./pages/login");
const Privacy = require("./pages/privacy");

const config = require("../_config");
const utils = require("../_utils");
const driverSetup = config.browser(process);


describe("Login Page", () => {

    let driver;

    beforeEach(async () => {
      driver = await driverSetup.build();
      login = new Login(driver);
      privacy = new Privacy(driver);

      await login.open();
    });

    // afterEach(async () => {
    //   driver.quit();
    // });

    describe("Login", () => {

        // Demo to test things that open on a new tab
        it("should open the privacy page", async () => {
            await login.openPrivacyPage();
            const headerText = await utils.waitFind(driver, privacy.locators.h1).getText();
            expect(headerText).to.equal("Privacy Policy");
        });
    })

})