'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  return new Promise(function (resolve, reject) {
    if (program && !program.authToken) {
      console.log('Requires login - $messages login');
      process.exit(1);
    }
    resolve(true);
  });
};

module.exports = exports['default'];