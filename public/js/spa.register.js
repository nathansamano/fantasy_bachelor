/*
 * spa.register.js
 */

spa.register = (function () {
  'use strict';
  //--- Begin local variables
  // change to const on server (need to upgrade Node)
  var SITE_KEY = "L4&yq9#Cne0hW!72g";
  var
    configMap = {
      main_html : String()
        + '<section id="register">'
          + '<form role="form">'
            + '<div class="form-group">'
              + 'Username<input class="form-control" id="user-input" type="text">'
              + 'Password<input class="form-control" id="password-input" type="text">'
              + 'Confirm Password<input class="form-control" id="confirm-password-input" type="text">'
              + 'Site Passkey<input class="form-control" id="site-passkey-input" type="text">'
            + '</div>'
          + '</form>'
          + '<a href="/"><button type="button" class="btn btn-primary" id="cancelBtn">Cancel</button></a>'
          + '<button type="button" class="btn btn-primary" id="regBtn">Register</button>'
        + '</section>'
    },

    stateMap = {
      $container  : undefined,
    },

    jqueryMap = {},
    initModule, setJqueryMap, postSection;
  //--- end local variables

  //--- DOM interaction methods
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container     : $container,
      $register      : $container.find('#register')
    };
  };
  // End DOM method /setJqueryMap/

  //--- end DOM-related methods

  //--- Public methods

  function main_page() {
    jqueryMap.$register.hide(); 
  }

  // Begin Public method /initModule
  initModule = function ( $container ) {

    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();
    $container.html( configMap.main_html );

    setJqueryMap();

    $("#regBtn").on("click", function() {
      console.log("hey");
    });

  };

  postSection = function() {
    jqueryMap.$register.show();
    jqueryMap.$container.show();
  };


  return { initModule : initModule,
           postSection : postSection
  };
  //--- end public methods
}());
