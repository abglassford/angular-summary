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
    .service('HandService', HandService);

  HandService.$inject = ['$http'];

  const baseUrl = 'https://deckofcardsapi.com/api/deck';
  const newDeckPath = '/new/draw/?count=52';

  function HandService ($http) {
    this.deck = [];
    this.hand = [];
    this.draw = () => {
      if (!this.deck.length) {
        return $http.get(baseUrl + newDeckPath).then(({data: { cards }}) => {
          this.deck = cards;
          drawACard.call(this);
        })
      } else {
        drawACard.call(this)
      }
    };

    function drawACard () {
      let selectedCard = this.deck.pop();
      this.hand.push(selectedCard);
      console.log('deck', this.deck.length, 'hand', this.hand, 'card', selectedCard);
    }
  }
}());
