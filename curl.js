const request = require('request');
module.exports = function (done, urlString) {
  request(urlString, function (error, reponse, body) {
    done(body);
  });
};
