'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program, app) {
  // Set up feathers services.
  var workoutService = app.service('workouts');
  program.command('create').description('create a new workout').action(function () {
    (0, _requiresAuth2.default)(program).then(function () {
      // get input
      _inquirer2.default.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name:'
      }, {
        type: 'input',
        name: 'body',
        message: 'Body:'
      }]).then(function (answers) {
        workoutService.create(answers).then(function (data) {
          console.log(_chalk2.default.green('Success'));
          console.log(data);
        }).catch(function (err) {
          return console.log(err);
        });
      }).catch(function (err) {
        console.log(err);
      });

      // process.exit(1)
    }).catch(function (err) {
      console.log(err);
    });
  });
};

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _requiresAuth = require('../utils/requires-auth');

var _requiresAuth2 = _interopRequireDefault(_requiresAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];