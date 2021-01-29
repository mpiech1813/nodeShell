const fs = require('fs');
module.exports = function (done) {
  //'filles' will be an array of filenames, like ['bash.js', 'pwd.js]
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something went wrong');
    } else {
      done(files.join('\n'));
    }
  });
};
