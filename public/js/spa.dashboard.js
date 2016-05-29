/*
 * spa.dashboard.js
 */

spa.dashboard = (function () {
  'use strict';
  //--- Begin local variables
  var
    contestants = ['Alex', 'Ali', 'Brandon', 'Chad', 'Chase',
                   'Christian', 'Coley', 'Derek', 'Daniel', 'Evan',
                   'Grant', 'Jake', 'James F.', 'James S.', 'James Taylor',
                   'Jonathan', 'Jordan', 'Luke', 'Nick B.', 'Nick S.',
                   'Peter', 'Robby', 'Sal', 'Vinny', 'Wells', 'Will'],
    current_picks = [],
    configMap = {
      main_html : String()
        + '<section id="dashboard">'
          //+ '<div id="current_picks">'
            //+ '<script id="sock_js" src="/js/data.js"></script>'
            + '<div>Name</div>'
            + '<div id="current_picks">Current Picks: </div>'

            + '<div class="col-xs-3">Pick 1</div>'
            + '<div class="col-xs-3">Pick 2</div>'
            + '<div class="col-xs-3">Pick 3</div>'
            + '<div class="col-xs-3">Goes Home</div>'

            //+ '<img src="../img/contestants/alex.jpg" id="pick_1"  class="img-rounded col-xs-3" alt="Cinque Terre" width="150" height="200">'
            //+ '<img src="cinqueterre.jpg" id="pick_2"  class="img-rounded col-xs-3" alt="Cinque Terre" width="150" height="200">'
            //+ '<img src="cinqueterre.jpg" id="pick_3"  class="img-rounded col-xs-3" alt="Cinque Terre" width="150" height="200">'
            //+ '<img src="cinqueterre.jpg" id="pick_4"  class="img-rounded col-xs-3" alt="Cinque Terre" width="150" height="200">'
          //+ '</div>'


          + '<div class="form-group col-xs-3">'
            + '<select class="form-control" id="sel1">'

            + '</select>'
          + '</div>'

          + '<div class="form-group col-xs-3">'
            + '<select class="form-control" id="sel2">'
              
            + '</select>'
          + '</div>'

          + '<div class="form-group col-xs-3">'
            + '<select class="form-control" id="sel3">'
              
            + '</select>'
          + '</div>'

          + '<div class="form-group col-xs-3">'
            + '<select class="form-control" id="sel4">'
              
            + '</select>'
          + '</div>'

          + '<div>Rankings'
            + '<button type="button" class="btn btn-primary col-xs-2" id="submitPicksBtn">Submit</button>'
          + '</div>'

          + '<div>player: score</div>'
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
      $dashboard      : $container.find('#dashboard'),
      $current_picks : $container.find('#current_picks'),
      $pick_1        : $container.find('#pick_1'),
      $pick_2        : $container.find('#pick_2'),
      $pick_3        : $container.find('#pick_3'),
      $pick_4        : $container.find('#pick_4')
    };
  };
  // End DOM method /setJqueryMap/

  //--- end DOM-related methods

  //--- Public methods
  // Begin Public method /initModule
  initModule = function ( $container ) {

    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();
    $container.html( configMap.main_html );

    setJqueryMap();

    // populate select lists
    for (var i = 0; i < contestants.length; i++) {
      $('#sel1').append('<option>' + contestants[i] + '</option>');
    }

    for (var i = 0; i < contestants.length; i++) {
      $('#sel2').append('<option>' + contestants[i] + '</option>');
    }

    for (var i = 0; i < contestants.length; i++) {
      $('#sel3').append('<option>' + contestants[i] + '</option>');
    }

    for (var i = 0; i < contestants.length; i++) {
      $('#sel4').append('<option>' + contestants[i] + '</option>');
    }

    // update current_picks
    $("#submitPicksBtn").on("click", function() {
      current_picks[0] = $('#sel1').val();
      current_picks[1] = $('#sel2').val();
      current_picks[2] = $('#sel3').val();
      current_picks[3] = $('#sel4').val();
      $('#current_picks').empty();
      $('#current_picks').append("Current Picks: " + current_picks.join(" "));
      console.log(current_picks);
    });

  };

  postSection = function() {
    jqueryMap.$dashboard.show();
    jqueryMap.$container.show();
  };

 
  return { initModule : initModule,
           postSection : postSection
  };
  //--- end public methods
}());
