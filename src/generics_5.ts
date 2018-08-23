interface LengthDefine {
    length: number;
}

function loggingIdentity<T extends LengthDefine>(arg: T): T {
    console.log(arg.length);

    return arg;
}

// loggingIdentity(3);

loggingIdentity({length: 10, value:3});

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = {a:1, b:2, c:3, d:4};
getProperty(x, "a");
// getProperty(x, "m");

function create<T> (c: {new(): T;}): T {
    return new c();
}


class Keeper1 {
    hasMask: boolean;
}

class Keeper2 {
    nameTag: string;
}

class Keeper3 {
    numLength: number;
}

class ChildrenKeeper1 extends Keeper3 {
    keeper: Keeper1;
}


class ChildrenKeeper2 extends Keeper3 {
    keeper: Keeper2;
}

function createInstance<A extends Keeper3> (c: new() => A): A {
    return new c();
}

console.log(createInstance(ChildrenKeeper1));
console.log(createInstance(ChildrenKeeper2));