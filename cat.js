const fs = require('fs');
const pwd = require('./pwd');

module.exports = function (done, fileName) {
  //   let filePath = `${pwd()}/${fileName}`;
  console.log(fileName);
  fs.readFile(fileName, (err, data) => {
    if (err) {
      done('Something went wrong');
    } else {
      done(data);
    }
  });
};
