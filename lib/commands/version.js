'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  // Expose version.
  program.version(_package2.default.version, '-v, --version');

  // Make `-v` option case-insensitive.
  process.argv = process.argv.map(function (arg) {
    return arg === '-V' ? '-v' : arg;
  });

  program.command('version').description('output the version').action(program.versionInformation);
};

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Check for an updated version and that the current
 * Node + NPM versions meet the CLI requirements.
 */

module.exports = exports['default'];