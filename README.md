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

This is optional, and if you choose not to use it just replace the where I've used the variables with your own and remove require("dotenv).config(); anywhere.
Prerequisites
Web Driver for Chrome
node 8 or above run nvm use will use `10.9.0`

To Run
In the root directory run: 
npm install
npm run test

Additional Web drivers
To add additional browsers you'll need to add them to the browsers object in the config.js file. Simply copy the Chrome configuration and replace it with your new driver. To run the tests using your new driver simply use your new key as the flag when running the npm test script e.g if you've added opera to the object you'd run: npm run test -- --opera