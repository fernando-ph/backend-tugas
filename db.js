var Connection = require('tedious').Connection
var Request = require('tedious').Request

var config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'DESKTOP-S61FQGG/nandoterorisLG', // update me
      password: '' // update me
    }
  }
}

module.exports.Connection = new Connection(config);
module.exports.Request = Request;