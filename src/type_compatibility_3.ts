// interface Generics<T> {
//     data: T;
// }

// let g1: Generics<number> = <Generics<number>>{};
// let g2: Generics<string> = <Generics<string>>{};

// g1 = g2;

let t1 = function<T>(x: T): T {
    // other ...
}

let t2 = function<U>(y: U): U {
    // other ...
}

t1 = t2