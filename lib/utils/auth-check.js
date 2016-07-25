'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (args) {
  var jwtFile = _path2.default.join(process.env.HOME, '.jwt');

  return new Promise(function (resolve, reject) {
    // resolve(true)
    _fs2.default.exists(jwtFile, function (exists) {
      if (exists) {
        _fs2.default.readFile(jwtFile, function (err, data) {
          if (err) reject(false);
          resolve(data);
        });
      } else {
        reject(false);
      }
    });
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];