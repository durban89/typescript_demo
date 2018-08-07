// abstract class Animal {
//     abstract makeSount(): void;

//     move(): void {
//         console.log('我在移动');
//     }
// }

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log("部门名称:" + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现   
}

class AccountingDepartment extends Department {
    constructor() {
        super("会计和审计"); // 在派生类中必须调用super()
    }

    printMeeting(): void {
        console.log('会计部每个星期一上午10点开会');
    }

    generateReports(): void {
        console.log('生成会议报告');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用

// department = new Department(); // 不能创建一个抽象类的实例
department = new AccountingDepartment(); //  允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); //  此方法不能调用，因为在声明的抽象类中不存在