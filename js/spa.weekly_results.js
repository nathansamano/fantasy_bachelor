/*
 * spa.weekly-results.js
 */

spa.weekly_results = (function () {
  'use strict';
  //--- Begin local variables
  var
    week_1 = WEEK_1,
    configMap = {
      main_html : String()
        + '<section id="weekly-results">'
          + '<div id="weekly-results-heading">Weekly Results</div>'
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
      $weekly_results: $container.find('#weekly-results')
    };
  };
  // End DOM method /setJqueryMap/

  //--- end DOM-related methods

  //--- Public methods

  function populateResults() {

    // week 2

    // week 1
    $('#weekly-results').append('Week 1');

    for (var i = 0; i < week_1.length; i++) {
      $('#weekly-results').append('<div id="name'+i+'">' 
        + week_1[i].name + ": "
      + '</div>');
      for (var j = 0; j < week_1[i].values.length; j++) {
        $('#name'.concat(i)).append(week_1[i].values[j].join(" "));
        if (j !== week_1[i].values.length-1)
          $('#name'.concat(i)).append(", ");
      }
    }
    
  }

  // Begin Public method /initModule
  initModule = function ( $container ) {

    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();
    $container.html( configMap.main_html );

    setJqueryMap();

    populateResults();

  };

  postSection = function() {
    jqueryMap.$weekly_results.show();
    jqueryMap.$container.show();
  };

 
  return { initModule : initModule,
           postSection : postSection
  };
  //--- end public methods
}());
