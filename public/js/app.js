function BeerpongViewModel(cards) {
  this.cards = cards;
  this.card = ko.observable(this.cards[Math.floor(Math.random() * this.cards.length)]);

  this.toggleCard = function() {
    this.card(this.cards[Math.floor(Math.random() * this.cards.length)]);
    $('.card').toggleClass('flipped');
  }
  
}

const cards = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '10',
]

ko.applyBindings(new BeerpongViewModel(cards));