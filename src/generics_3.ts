function identity<T> (arg: T) : T {
    return arg;
}

let otherIdentity: <T> (arg: T) => T = identity;

let other1Identity: <U> (arg: U) => U = identity; 

let other2Identity: { <U>(arg: U): U } = identity;


interface GenerateIdentityFunc {
    <U> (arg: U): U;
}

let other3Identity: GenerateIdentityFunc = identity;

interface GenerateIdentityFunc1<U> {
    (arg: U): U
}

let other4Identity: GenerateIdentityFunc1<number> = identity;