'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  program.command('logout').description('logout from cli app.').alias('g').action(function () {
    console.log('logout has been called');
    process.exit(1);
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];