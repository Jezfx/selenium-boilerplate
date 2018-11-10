# Selenium journey testing example

### Intro
I'm aware that with the upcomming support of Cypress.io the life span of this probably isn't long and if you have the option to use it over Selenium I would. Currently (as of writing this) Cypress.io has only just come out of beta and only has support for Chrome. So, if like me, you need your user journey (or, end-to-end) tests to support other browsers or automated intergration with Browserstack then this might Selenium might still be the best option.

This was my first time using Selenium and decided to put up this repo after spending hours of trying to find good examples and finding the documenation outdataed and confusing to understand.

This repo is how I organised our user journey tests with my last client. I've changed the tested site to google.com and re-removed 80% of the tests to only show the main functionality. You'll need to change the browserstack credientials to get the automated uploads to work. This is by no means the best way to do user journey tests but just an example (as therer wasn't many good ones I could find) of how we did it, feel free to take or leave any parts of it, enjoy ✌️.

## Approach

### Journeys
Each page has its own file from where the tests start from. Each test should have a limited focus. So, for example when testing the login function from the homepage you'd only check its made it to the loging page, and not test the journey any further.

`homepage.ui.js`

```js
describe("Homepage", () => {

    describe("Header", () => {
        it("should login", () => {
            /// ...
            expect(header).to.equal("logged in")
        })
    })
})
```

### File naming convention
The naming convention of suffixing test files with `.ui` was using to 1) seperate the tests when running mocha 2) meant we could have .js files in the repo without them being ran by the testing library.

`"ui-test": "node node_modules/mocha/bin/mocha ./__test__/**/*.ui.js --timeout=60000"` (the full path to mocha is used for support for windows)

### Page Object Model
This pattern allows us to contain any methods (e.g login, clickSearch) or locators inside a class which we can share between tests and keep seperate from the testing logic.

## Utilites
- *wait* to pause the test and wait for any animations or things to load before carring on.
- *switchTab* use this util function when you need to run the test on a new tab that's opened


- how to set up browser stack
- where to enter the  credentials (might make this a cong thing)


Gotchas
The flags are mac only, process.env works differently on windows so to get those to work you need to add this script file.


- talk about