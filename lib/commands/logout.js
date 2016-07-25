'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  program.command('logout').description('logout a template').alias('g').action(function () {
    console.log('logout has been called');
    process.exit(1);
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _fs = require('fs');

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];