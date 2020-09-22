// function identity(arg: number): number {
//     return arg;
// }

// function identity(arg: any): any {
//     return arg
// }

function identity<T>(arg: T): T {
    return arg;
}

// let output = identity<string>("someString");
// console.log(output);
// console.log(typeof output);

let output = identity("other someString");
console.log(output);
console.log(typeof output);