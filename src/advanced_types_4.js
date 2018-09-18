function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function getType(i) {
    switch (i.kind) {
        case "interface1":
            return i.property1 * i.property1;
        case "interface2":
            return i.property2 * i.property3;
        case "interface3":
            return i.property4 * i.property5;
        default:
            return assertNever(i); // // error here if there are missing cases
    }
}
