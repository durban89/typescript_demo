// class Grid {
//     constructor(public scale: number) { }

//     static origin = {
//         x:0,
//         y:0,
//     }

//     calculateDistanceFromOrigin(point: {x: number, y: number}) {
//         let xDist = point.x - Grid.origin.x;
//         let yDist = point.y - Grid.origin.y;

//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
// }

// let grid1 = new Grid(1.0)
// let grid2 = new Grid(2.0)

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));