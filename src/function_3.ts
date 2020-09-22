// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ")
// }

// let aName = buildName("Lili", "John", "David", "Durban");
// console.log(aName);

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFunc: (fname: string, ...rest: string[]) => string = buildName;

console.log(buildNameFunc("John", "Julia", "July"));