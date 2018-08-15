let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string, card: number}[]): number;
function pickCard(x: number): {suit: string, card: number};
function pickCard(x: any): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x / 13);
        return {
            suit: suits[pickedSuit],
            card: x % 13,
        }
    }
}

let myDeck = [
    {
        suit: "diamands",
        card: 2,
    },
    {
        suit: 'spades',
        card: 10,
    },
    {
        suit: 'hearts',
        card: 4
    }
]

let pickedCard1 = myDeck[pickCard(myDeck)];
let pickedCard2 = pickCard(15);

console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);