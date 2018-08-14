interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: [
        'hearts',
        'spades',
        'clubs',
        'diamods'
    ],
    cards: Array(4),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 4);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit: this.suits[pickedCard],
                card: pickedCard % 13,
            }
        }
    }

}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);