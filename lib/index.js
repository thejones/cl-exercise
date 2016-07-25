'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var args = process.argv;
  _commander2.default.debug = debug;

  // Check to see if command was run as root and try to downgrade permissions.
  // If that fails show an error and exit out. We don't want to create files as root.
  (0, _rootCheck2.default)('\n    ' + _chalk2.default.red("Easy with the 'sudo'.") + '\n\n    Since feathers is a user command, there is no need to execute it with root permissions.\n    If you\'re having permission errors when using feathers without sudo, please spend a few\n    minutes learning more about how your system should work and make any necessary repairs.\n\n    Two quick solutions are to change where npm stores global packages by putting ~/npm/bin\n    in your PATH and running: ' + _chalk2.default.bold('npm config set prefix ~/npm') + ' or simply using NVM to manage\n    your node environment. See https://github.com/creationix/nvm.\n    ');

  (0, _authCheck2.default)().then(function (data) {
    _commander2.default.authToken = data.toString();
    setup();
  }).catch(function (err) {
    if (err) {
      _commander2.default.authToken = null;
    }
    setup();
  });

  // Register our commands with commander
  var registerCommands = function registerCommands(app) {
    (0, _create2.default)(_commander2.default, app);
    (0, _list2.default)(_commander2.default, app);
    (0, _login2.default)(_commander2.default, app);
    (0, _logout2.default)(_commander2.default);
    (0, _help2.default)(_commander2.default);
    (0, _version2.default)(_commander2.default);
  };

  var run = function run() {
    _commander2.default.parse(args);
    // Show help if no other command was called
    if (!_commander2.default.args.length) {
      _commander2.default.help();
    }
  };

  var setup = function setup() {
    var client = _request2.default.defaults({
      'auth': {
        'bearer': _commander2.default.authToken
      }
    });

    // Config feathers client
    var app = (0, _client2.default)().configure((0, _feathersHooks2.default)()).configure((0, _client4.default)(host).request(client)).configure((0, _client6.default)());

    registerCommands(app);
    run();
  };

  // Add some extra padding
  process.on('exit', function () {
    console.log();
  });
};

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

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

var _rootCheck = require('root-check');

var _rootCheck2 = _interopRequireDefault(_rootCheck);

var _create = require('./commands/create');

var _create2 = _interopRequireDefault(_create);

var _list = require('./commands/list');

var _list2 = _interopRequireDefault(_list);

var _login = require('./commands/login');

var _login2 = _interopRequireDefault(_login);

var _logout = require('./commands/logout');

var _logout2 = _interopRequireDefault(_logout);

var _help = require('./commands/help');

var _help2 = _interopRequireDefault(_help);

var _version = require('./commands/version');

var _version2 = _interopRequireDefault(_version);

var _authCheck = require('./utils/auth-check.js');

var _authCheck2 = _interopRequireDefault(_authCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Commands

// Feathers
var debug = (0, _debug2.default)('feathers-cli');

var host = 'http://localhost:3030';

module.exports = exports['default'];