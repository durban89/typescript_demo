class GenerateT<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let generateT1 = new GenerateT<number>();
generateT1.zeroValue = 1
generateT1.add = (x, y) => { return x + y; }


let generateT2 = new GenerateT<string>();
generateT2.zeroValue = "";
generateT2.add = (x, y) => { return x + y; }

console.log(generateT2.add(generateT2.zeroValue, "test"));