let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

first = input[0];
second = input[1];

console.log(first);
console.log(second);

[first, second] = [second, first];
console.log(first);
console.log(second);

function f6([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f6([1,2]);

let [one, ...rest] = [1, 2, 3, 4];
console.log(one);
console.log(rest);

let [number_one] = [1, 2, 3, 4];
console.log(number_one);

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a, b);

({ a, b } = { a: "baz", b: 101 });
console.log(a, b);

let m = {
    x: "a",
    y: 12,
    z: "b"
}

let { x, ...passthrough } = m;
let total = passthrough.y + passthrough.z.length;
console.log(x, total, passthrough)

type C = { a: string, b?: number }
function f7({ a, b }: C): void {
    // ...
}

function f8({ a, b } = { a: "hello", b: 0 }): void {
    // ...
    console.log(a, b);
}
f8();

let a_one = [1, 2];
let a_two = [3, 4];
let bothPlus = [0, ...a_one, ...a_two, 5];
console.log(bothPlus);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search)