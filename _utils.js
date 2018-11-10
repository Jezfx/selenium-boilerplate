exports.wait = require('util').promisify(setTimeout);

exports.switchTab = driver => {
  const handlePromise = driver.getAllWindowHandles();

  handlePromise.then(function (handles){
    var popUpWindow = handles[1];

    driver.switchTo().window(popUpWindow);
  });
}