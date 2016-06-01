/*
 * spa.js
 */

var spa = (function () {
  'use strict';
  var initModule = function ( $container ) {
    // Start the shell
    spa.shell.initModule( $container );
  };
  var test = 'test';
  return { initModule: initModule };
}());
