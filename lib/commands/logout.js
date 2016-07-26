'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  program.command('logout').description('logout (delete .jwt file').action(function () {

    var jwtFile = _path2.default.join(process.env.HOME, '.jwt');
    _fs2.default.unlink(jwtFile, function (err, success) {
      if (err) {
        console.log(_chalk2.default.red(err));
        return;
      }
    });
    process.exit(1);
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];