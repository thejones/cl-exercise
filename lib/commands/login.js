'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program, app) {
  var jwtFile = _path2.default.join(process.env.HOME, '.jwt');
  program.command('login').description('login to a feathers server').action(function () {
    _inquirer2.default.prompt([{
      type: 'input',
      name: 'email',
      message: 'Email:'
    }, {
      type: 'password',
      name: 'password',
      message: 'Password:'
    }]).then(function (answers) {
      app.authenticate({
        type: 'local',
        'email': answers.email,
        'password': answers.password
      }).then(function (result) {
        _fs2.default.writeFile(jwtFile, result.token, function (err) {
          if (err) {
            console.log(_chalk2.default.red('Error saving auth information.'));
            return;
          }
          program.authToken = result.token;
          console.log(_chalk2.default.green('Login successful'));
        });
      }).catch(function (error) {
        console.log('anyyything');
        console.log(_chalk2.default.red(error));
      });
    }).catch(function (err) {
      console.log(err);
    });
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];