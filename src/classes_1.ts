class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return this.greeting;
    }
}

const greeter = new Greeter("Good Morning");
console.log(greeter.greet());