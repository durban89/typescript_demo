interface SomeClassInterface {
    property1: string;
    // 设置property1
    setProperty1(p: string): any;
    getProperty1(): string;
}

interface SomeConstructor {
    new(arg1: string, arg2: string): SomeClassInterface
}

function createSomeFunc(ctr: SomeConstructor, arg1: string, arg2: string): SomeClassInterface {
    return new ctr(arg1, arg2)
}

class ImplementSomeInterface1 implements SomeClassInterface {
    property1: string;
    property2: string;
    constructor(arg1: string, arg2: string) {
        this.property1 = arg1;
        this.property2 = arg2;
    }

    setProperty1(p: string): any {
        this.property1 = p;
    }
    
    getProperty1() {
        return this.property1 + ' = implementSomeInterface1';
    }
}

class ImplementSomeInterface2 implements SomeClassInterface {
    property1: string;
    property2: string;
    constructor(arg1: string, arg2: string) {
        this.property1 = arg1;
        this.property2 = arg2;
    }

    setProperty1(p: string): any {
        this.property1 = p;
    }
    
    getProperty1() {
        return this.property1 + ' = implementSomeInterface2';
    }
}

let instance1 = createSomeFunc(ImplementSomeInterface1, 'arg1', 'arg2');
let instance2 = createSomeFunc(ImplementSomeInterface2, 'arg1', 'arg2');
console.log(instance1.getProperty1());
console.log(instance2.getProperty1());

let instance3 = new ImplementSomeInterface2('arg1','arg2')
console.log(instance3.getProperty1());