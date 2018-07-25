// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: "black" });
// console.log(mySquare);

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.clor) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.color = config.clor;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: "black" });
// console.log(mySquare);