class Card {
  constructor(suit, rank, value) {
    this.suit = suit
    this.rank = rank
    this.val = value
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
  }

  createDeck() {
    let suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
    let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 1))
      }
    }

    this.shuffle()
  }

  shuffle() {
    this.cards = this.cards.sort((a, b) => 0.5 - Math.random())
  }
}

class gameOfWar {
     constructor() {
      this.p1 = [];
      this.p2 = [];
      this.pile = [];
     }

     gameInit() {
     let deck = new Deck();
     console.log(deck.cards.length);
     this.p1 = deck.cards.splice(0,deck.cards.length / 2);
     console.log(deck.cards.length);
     this.p2 = deck.cards;
  
     }
     
     startGame() {
      this.gameInit()
      while(this.p1.length > 0 && this.p2.length){

      // set up game logic loop(a player has no cards)
      let p1Card = this.p1.pop();
      let p2Card = this.p2.pop();


      if (p1Card.val === p2Card.val) {
        console.log( 'war!!');
        this.war(p1Card, p2Card)
      } else if (p1Card.val > p2Card.val) {
        this.p1.unshift(p2Card, p1Card, ...this.pile)
        // clear the pile
        this.pile.length = 0
        console.log('player 1 wins!')
      } else {
        console.log('player 2 wins!!')
        this.p2.unshift(p1Card, p2Card, ...this.pile)
        // clear the pile
        this.pile.length = 0
      }

    }
  }

  war(p1Card, p2Card) { 
    // adjust for edge cases ( a player does not have enough cards)
    //  this.pile.push(...this.p1.splice(0, 3))
    //  this.pile.push(...this.p2.splice(0, 3))

     if (this.p1.length < 4 && this.p2.length < 4){

      let p1WarCard = this.p1.splice(0, this.p1.lengthm -2)
      let p2WarCard = this.p2.splice(0, this.p2.lengthm -2)
      this.pile.push(p1Card, ...p1WarCard, p2Card, ...p2WarCard)

     } else if (this.p1.length < 4){
     
      let p1WarCard = this.p1.splice(0, this.p1.length -2)
      let p2WarCard = this.p2.splice(this.p2.length -3, 3)
      this.pile.push(p1Card, ...p1WarCard, p2Card, ...p2WarCard)

     }
     else if (this.p2.length < 4){
     
      let p1WarCard = this.p1.splice(this.p1.length -3, 3)
      let p2WarCard = this.p2.splice(0, this.p2.length -2)
      this.pile.push(p1Card, ...p1WarCard, p2Card, ...p2WarCard)
    }

   else {

    let p1WarCard = this.p1.splice(this.p1.length -3, 3)
    let p2WarCard = this.p2.splice(this.p2.length -3, 3)
    this.pile.push(p1Card, ...p1WarCard, p2Card, ...p2WarCard)
  }
   

}
}

let game = new gameOfWar()
game.startGame()
console.log(game)