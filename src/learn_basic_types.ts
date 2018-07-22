// 布尔值
let isDone: boolean = false;
console.log('isDone = ', isDone);

// 数字
let number1: number = 6;
let number2: number = 0xf00d;
let number3: number = 0b1010;
let number4: number = 0o744;

console.log('number1 = ', number1);
console.log('number2 = ', number2);
console.log('number3 = ', number3);
console.log('number4 = ', number4);


// 字符串
let title: string = "gowhich";
console.log('title = ', title);

let firstName: string = "Durban";
let age: number = 42
let sentence: string = `==
Hello, 大家好，我是${firstName}

下个月我就${age}岁大了。
`;
console.log(sentence);

// 数组
let list1: number[] = [1,2,3];
console.log(list1);
let list2: Array<number> = [1,2,3]
console.log(list2);

// 元组
// 声明元组类型
let x: [string, number]
// 正确的初始化x
x = ["durban", 42]
// 错误的初始化
// x = [42， "durban"]
console.log('x = ', x);

console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // number 没有substr
x[3] = "world"
console.log(x[5])
console.log('x = ', x);
// x[6] = true // Error, 布尔不是(string | number)类型

// 枚举
enum Color {Red = 1, Green = 4, Blue = 8}
let c: string = Color[4];
console.log('c = ', c)

// Any
let notSure: any = 4
notSure = false
notSure = "A string"

// notSure.toFixed()


let list: any[] = [1, true, 'durban'];
console.log(list[1])
list[1] = 100;
console.log(list[1])

function noReturn(params:string): void {
    alert("HaHa");
}

let unusable: void = undefined;
console.log('unusable = ', unusable);


//

let u: undefined = undefined
let n: null = null

// Object
declare function create(o: object | null) :void ;
create({ prop: 0 })
create(null)
// create(42) // 会报错
// create("string") // 会报错
// create(false) // 会报错
// create(undefined) // 会报错

// 返回never的函数必须存在无法达到的终点
function error(message:string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function Failed() {
    return error("Fauled");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
        
    }
}

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
console.log('strLength = ', strLength);