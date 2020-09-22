// function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{}

//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }

//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }

//     return result
// } 

// class AdvancedTypesClass {
//     constructor(public name: string){}
// }

// interface LoggerInterface {
//     log(): void;
// }

// class AdvancedTypesLoggerClass implements LoggerInterface {
//     log(): void {
//         console.log('console logging');
//     }
// }

// var logger = new AdvancedTypesLoggerClass();

// var extend1 = extend(new AdvancedTypesClass("string"), new AdvancedTypesLoggerClass());
// var e = extend1.name;
// console.log(e);
// extend1.log();

// function padLeft(value: string, padding: any) {
//     if (typeof padding === 'string') {
//         return padding + value;
//     }

//     if (typeof padding === 'number') {
//         return Array(padding + 1).join(' ') + value;
//     }

//     throw new Error(`Excepted string or number, got ${padding}`);
// }
// console.log("|" + padLeft("string", 4) + "|");
// console.log("|" + padLeft("string", "a") + "|");

// function padLeft(value: string, padding: string | number) {
//     if (typeof padding === 'string') {
//         return padding + value;
//     }

//     if (typeof padding === 'number') {
//         return Array(padding + 1).join(' ') + value;
//     }

//     throw new Error(`Excepted string or number, got ${padding}`);
// }
// console.log("|" + padLeft("string", 4) + "|");
// console.log("|" + padLeft("string", "a") + "|");
// console.log("|" + padLeft("string", true) + "|");

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
// type.func1(); // 报错