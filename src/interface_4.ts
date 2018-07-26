interface SquareConfig {
    color?: string;
    width?: number;
    // 第二种解决方案
    // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// let mySquare = createSquare({ colour: "red", width: 100 });

// 第一种解决方案
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// console.log(mySquare);

// 第二种解决方案的调用方式
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
console.log(mySquare);