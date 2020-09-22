// interface Interface1 {
//   kind: 'interface1',
//   property1: number,
// }

// interface Interface2 {
//   kind: 'interface2',
//   property2: number,
//   property3: number,
// }

// interface Interface3 {
//   kind: 'interface3',
//   property4: number,
//   property5: number,
// }

// interface Interface4 {
//   kind: 'interface4',
//   property6: number,
// }

// type Type = Interface1 | Interface2 | Interface3 | Interface4;

// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }

// function getType(i: Type): number { // error: returns number | undefined
//   switch (i.kind) {
//     case "interface1":
//       return i.property1 * i .property1;
//     case "interface2":
//       return i.property2 * i.property3;
//     case "interface3":
//       return i.property4 * i.property5;
//     default:
//       return assertNever(i); // // error here if there are missing cases
//   }
// }

