import { sayHello } from "./greet";

function showHello(idName: string, name: string) {
    const elt = document.getElementById(idName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript on the gowhich.");
