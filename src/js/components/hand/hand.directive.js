//1. Write an IIFE
//2. Create/Access your module
//3. $inject
//4. Named function and write the function
//5. Connect in app.js
//6. Connect in index.html

(function() {
  'use strict';

  angular
    .module('CardDrawApp.components.hand')
    .directive('cdHand', HandDirective);

  HandDirective.$inject = [];

  function HandDirective () {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'js/components/hand/hand.html',
      controller: 'HandController',
      controllerAs: 'vm',
      link: function (scope, element, attrs, ctrl, transcludeFn) {
        element.on('click', function () {
          console.log('Directive');
        });
      }
    };
  }

}());
