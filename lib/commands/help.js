'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (program) {
  program.command('help').description('display help menu').action(function () {
    program.help();
    console.log('help');
  });
};

module.exports = exports['default']; /*
                                      * Display help
                                      */