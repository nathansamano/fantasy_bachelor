/*
 * spa.shell.js
 */

spa.shell = (function () {
  'use strict';
  // ------------> "Local" variables
  var
    configMap = {
      main_html : String()
      // top navbar
      + '<nav>'
        + '<div class="navbar navbar-default" role="navigation">'
          + '<div class="navbar-header">'
            + '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">'
              + '<span class="sr-only">Toggle navigation</span>'
              + '<span class="icon-bar"></span>'
              + '<span class="icon-bar"></span>'
              + '<span class="icon-bar"></span>'
            + '</button>'
            + '<a class="navbar-brand" href="/">Fantasy Bachelor</a>'
          + '</div>'
          + '<ul class="nav navbar-nav navbar-right" id="logs">'
            
          + '</ul>'
        + '</div>'
      + '</nav>'
      
      // small nav dropdown
      + '<nav class="collapse navbar-collapse navbar-ex1-collapse col-md-8 col-sm-7">'
        + '<ul class="nav nav-sidebar" id="side">'
          + '<li><a href="">My Dashboard</a></li>'
          + '<li><a href="">Weekly Results</a></li>'
          + '<li id="logOut"><a href=""><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>'
        + '</ul>'
      + '</nav>'
      
      // main sign-in form & body
      + '<section><div id="content-main">'
        + '<form role="form">'
          + '<div class="form-group">'
            + 'Username<input class="form-control" id="inputdefault" type="text">'
            + 'Password<input class="form-control" id="inputdefault" type="text">'
          + '</div>'
        + '</form>'
        + '<button type="button" class="btn btn-primary" id="registerBtn">Register</button>'
        + '<a href="/dashboard"><button type="button" class="btn btn-primary" id="signInBtn">Sign In</button></a>'
      + '</div>'
      + '</section>'
      + '<section><div id="content-dashboard"></div></section>'
      + '<section><div id="content-register"></div></section>'
      + '<section><div id="content-weekly-results"></div></section>'
    },
      
    stateMap = {
      // View state information
      $container  : undefined,
    },

    jqueryMap = {},

    initModule, setJqueryMap, currentMod;

  //--- end variables


  //--- Methods interacting with the DOM/jQuery

  // Begin DOM method /setJqueryMap
  setJqueryMap = function () {
    var $container = stateMap.$container;

    // Only three regions for now
    jqueryMap = {
      $container      : $container,
      //$nav       : $container.find('#side'),
      $content        : $container.find('#content-main'),
      $dashboard      : $container.find('#content-dashboard'),
      $register       : $container.find('#content-register'),
      $weekly_results : $container.find('#content-weekly-results'),
      $registerBtn    : $container.find('#registerBtn'),
      $signIn         : $container.find('#signInBtn')
    };
  };
  // End DOM method /setJqueryMap

  // Begin client-side router methods

  // Base route 
  function index() {
    currentMod.hide();
    currentMod = jqueryMap.$content; 
    jqueryMap.$content.show();
    $('#logs').hide();
  }

  // -- One function per feature module

  // Sign In button
  function signIn() {
    if ( currentMod != jqueryMap.$dashboard )
      currentMod.hide();
    currentMod = jqueryMap.$dashboard;
    spa.dashboard.postSection();

    // setup navbar
    $('#logs').empty();
    $('#logs').append('<li class="top-nav"><a href="/dashboard">My Dashboard</a></li>'
          + '<li class="top-nav"><a href="/weekly-results">Weekly Results</a></li>'
          + '<li class="top-nav"><a id="logOut" href="/signout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>'
        );
  }

  function register() {
    if ( currentMod != jqueryMap.$register )
      currentMod.hide();
    currentMod = jqueryMap.$register;
    spa.register.postSection();
  }

  function dashboard() {
    if( currentMod != jqueryMap.$dashboard )
      currentMod.hide();
    currentMod = jqueryMap.$dashboard
    spa.dashboard.postSection();
    $('#logs').show();
  }

  function weekly_results() {
    if( currentMod != jqueryMap.$weekly_results )
      currentMod.hide();
    currentMod = jqueryMap.$weekly_results
    spa.weekly_results.postSection();
  }


  // End DOM client-side router methods

  // -- end DOM-oriented methods //

  // -- Public API methods

  // Begin Public method /initModule
  initModule = function ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html( configMap.main_html );

    // Keep track of our elements
    setJqueryMap();

    // Initialize each feature module
    //spa.dates.initModule(jqueryMap.$dates);
    jqueryMap.$content.hide();
    jqueryMap.$register.hide();
    spa.dashboard.initModule(jqueryMap.$dashboard);
    spa.register.initModule(jqueryMap.$register);
    spa.weekly_results.initModule(jqueryMap.$weekly_results);

    // Default content is "home" screen
    currentMod = jqueryMap.$dashboard;

    // Set up routes
    page('/', index);
    //page('/dashboard', dashboard);
    //page('/dashboard', signIn);
    //page('/weekly-results', weekly_results);
    page();

    $("#signInBtn").on("click", function() {
      signIn();
    });

    $("#registerBtn").on("click", function() {
      register();
    });

    $("#logOut").on("click", function() {
      console.log("clicked logout");
    });

    signIn();

  }; // End public method initModule

  // Post API reference property
  return { initModule : initModule };
  //--- end methods exposed to public
}());
