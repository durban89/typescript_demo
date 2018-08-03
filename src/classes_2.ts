class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceMeter: number = 0) {
        console.log(`${this.name} moved ${distanceMeter}m`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceMeter: number = 5) {
        console.log('滑动的声音......');
        super.move(distanceMeter);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceMeter: number = 45) {
        console.log('跑动的声音......');
        super.move(distanceMeter);
    }
}

const snake = new Snake('small snake');
const horse: Animal = new Horse('small horse');

snake.move();
horse.move(152);