// class Greeter {
//     static standardGreeting: string = 'Hello, World';
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, "+this.greeting;
//         } else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = 'Hello, other';

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());


class Point {
    x: number;
    y: number;
}

interface Point3D extends Point {
    z: number;
}

let point3d: Point3D = {
    x: 1,
    y: 2,
    z: 3,
}

console.log('point3d = ', point3d);