'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  var host = 'http://localhost:3030';
  var client = void 0;
  if (program.authToken) {
    client = _request2.default.defaults({
      'auth': {
        'bearer': program.authToken
      }
    });
  } else {
    client = _request2.default.defaults();
  }
  // Config feathers client
  var app = (0, _client2.default)().configure((0, _feathersHooks2.default)()).configure((0, _client4.default)(host).request(client)).configure((0, _client6.default)());
  return app;
};

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _client = require('feathers/client');

var _client2 = _interopRequireDefault(_client);

var _feathersHooks = require('feathers-hooks');

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _client3 = require('feathers-rest/client');

var _client4 = _interopRequireDefault(_client3);

var _client5 = require('feathers-authentication/client');

var _client6 = _interopRequireDefault(_client5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
// Feathers