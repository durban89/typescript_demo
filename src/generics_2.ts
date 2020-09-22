function identity<T>(arg: T): T {
    return arg
}

// function loggingIdentity<T>(arg: T): T {
//     // console.log(arg.length); // no length property
//     return arg
// }

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}