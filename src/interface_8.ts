interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square> {};
square.color = 'red'
square.sideLength = 10;
square.penWidth = 10;


interface Counter {
    (start: number): string
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function(start: number) {};
    counter.interval = 10;
    counter.reset = function() {}
    return counter;
}

let counter = getCounter()
counter(10);
counter.reset();
counter.interval = 10.0


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {

}

class Image implements SelectableControl {
    select() {}
}