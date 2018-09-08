// interface Type1 {
//     func1(): void;
//     func2(): void;
// }

// interface Type2 {
//     func3(): void;
//     func2(): void;
// }

// class Type1Class implements Type1 {
//     func1(): void {
//         console.log('func1 run');
//     }

//     func2(): void {
//         console.log('func2 run');
//     }
// }

// class Type2Class implements Type2 {
//     func3(): void {
//         console.log('func1 run');
//     }

//     func2(): void {
//         console.log('func2 run');
//     }
// }

// function getSomeType(type: string): Type1Class | Type2Class {
//     if (type === '1') {
//         return new Type1Class();
//     }

//     if (type === '2') {
//         return new Type2Class();
//     }

//     throw new Error(`Excepted Type1Class or Type2Class, got ${type}`);
// }

// let type = getSomeType('1');
// type.func2();
// if ((<Type1Class>type).func1) {
//     (<Type1Class>type).func1();
// } else if ((<Type2Class>type).func3) {
//     (<Type2Class>type).func3();
// }


// function isType1(type: Type1Class | Type2Class): type is Type1Class {
//     return (<Type1Class>type).func1 !== undefined;
// }

// if(isType1(type)) {
//     type.func1()
// } else {
//     type.func3();
// }

// function isNumber(x: any): x is number {
//     return typeof x === "number";
// }

// function isString(x: any): x is string {
//     return typeof x === "string";
// }

// function padLeft(value: string, padding: string | number) {
//     if (isString(padding)) {
//         return padding + value;
//     }

//     if (isNumber(padding)) {
//         return Array(padding + 1).join(' ') + value;
//     }

//     throw new Error(`Excepted string or number, got ${padding}`);
// }

// console.log("|" + padLeft("string", 4) + "|");
// console.log("|" + padLeft("string", "a") + "|");

interface PadInterface {
    getPadString(): string;
}

class SpacePad implements PadInterface {
    constructor(private num: number){}
    getPadString(): string {
        return Array(this.num + 1).join(' ');
    }
}

class StringPad implements PadInterface {
    constructor(private string: string) { }
    getPadString(): string {
        return this.string;
    }
}

function getRandomPad() {
    return Math.random() < 0.5 ? 
    new SpacePad(5) :
    new StringPad(" ");
}

let pad: PadInterface = getRandomPad();
if (pad instanceof SpacePad) {
    console.log("|" + pad.getPadString() + "string|")
}

if (pad instanceof StringPad) {
    console.log("|" + pad.getPadString() + "string|")
}