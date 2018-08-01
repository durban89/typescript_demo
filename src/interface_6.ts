interface SomeArray {
    [index: number]: string;
}

let someArray: SomeArray;
someArray = ["string1", "string2"];

let str: string = someArray[0];
console.log(str);

// 

class Person {
    name: string;
}
class Student extends Person {
    className: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Person!
interface NotOkay {
    // [x: number]: Person; // 数字索引类型“Person”不能赋给字符串索引类型“Student”
    [x: string]: Student;
}

interface SomeInterface {
    [index: string]: string
    // length: number    // 错误，`length`的类型与索引类型返回值的类型不匹配
    name: string       // 可以，name是string类型
}

interface ReadonlySomeArray {
    readonly [index: number]: string;
}
let readonlyArray: ReadonlySomeArray = ["string1", "string2"];
readonlyArray[2] = "string3"; // error!
