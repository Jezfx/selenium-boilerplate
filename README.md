# Selenium NodeJS boilerplate with Browserstack

<img src="https://imgur.com/download/z0lz3Bb" />


# Getting started

Feel free to remove the demo tests and pages that I've included as an example and simply use this as a boilerplate to create your own. However, the tests I've included cover some simple functionality which you can use as reference to get going with pretty quickly. 
These tests are against google.com and cover the; 

**1) Home page**

The first tests  checks to see if the header div exists, which is a common type of test to check if the correct elements have loaded. Another test will go through the log in process. 

**2) Login page**

This test check the privacy link on the login page as it opens a new tab and makes use of the switchTab utility function. 

## Set up
I've used an `.env` file to store any credentials. 
```
GOOGLE_EMAIL=email
GOOGLE_PASSWORD=password
BROWSERSTACK_USERNAME=username
BROWSERSTACK_AUTOMATE_KEY=key
```

This is optional, and if you choose not to use it just replace the where I've used the variables with your own and remove `require("dotenv).config();` anywhere.

## Prerequisites
- Web Driver for Chrome
- Node 8 or above run nvm use will use the latest stable version

## To Run

In the root directory run: 

- `npm install`
- `npm run test`

## Additional Web drivers
To add additional browsers you'll need to add them to the browsers object in the config.js file. Simply copy the Chrome configuration and replace it with your new driver. To run the tests using your new driver simply use your new key as the flag when running the npm test script e.g if you've added opera to the object you'd run: `npm run test -- --opera`

## Browserstack
To run automate the tests with browserstack ensure you have an account and have filled in your credentials in the `.env` file. Then just add the Browerstack flag to the npm script to run. That should sent the tests to your Browserstack dashboard and generate the relevant videos and logs.

<img src="https://imgur.com/download/fLT7zym" />

Above is an example of the Google login test as you can see the Google log in doesn't actually complete due to authentication checks however, this isn't an issue with the tests or browserstack and shouldn't be a problem unless you're logging into Google.

To add other browsers, devices or oporating system to Browserstack just update the `capabilities` variable in the `config.js` with any others you'd want to include ([useful generator](https://www.browserstack.com/automate/capabilities)).
