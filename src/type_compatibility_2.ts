// enum Status {
//     Ready,
//     Waiting,
// };

// enum Color {
//     Color1,
//     Color2,
//     Color3,
// };

// let s = Status.Ready;
// s = Color.Color1;

class PersonType {
    name: string;
    constructor(name: string, age: number) {}
}

class AnimalType {
    name: string;
    constructor (name: string) {}
}

let PT: PersonType = new PersonType('a', 1);
let AT: AnimalType = new AnimalType('a');

AT = PT
PT = AT