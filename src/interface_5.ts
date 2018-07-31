interface someInterface {
    (arg1: string, arg2: string): boolean
}

let someFunc: someInterface
someFunc = function (arg1: string, arg2: string) {
    const res = arg1.search(arg2)
    return res > -1;
}
console.log(someFunc('weast','east'));


let someFunc2: someInterface;
someFunc2 = function (x: string, y: string): boolean {
    const res = x.search(y);
    return res > -1;
}
console.log(someFunc2('weast', 'east'));