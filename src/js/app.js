// sample angular code

(function() {

  'use strict';

  angular
    .module('CardDrawApp', [
      'ngRoute',
      'CardDrawApp.config',
      'CardDrawApp.components.hand',
      'CardDrawApp.components.deck'
    ]);

})();
