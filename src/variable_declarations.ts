function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f1();
console.log(g());

function f2() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

console.log(f2());

// 作用域规则
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(f(true));
console.log(f(false));

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

// 捕获变量怪异之处
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () { console.log(i); }, 100 * i);
// }

// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () { console.log(i); }, 100 * i);
//     })(i);
// }

// let 声明变量

function f3(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

console.log(f3(true));
// console.log(f3(false));

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
// console.log(e);

function f4(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

console.log("========f4=========\n");
console.log(f4(false, 0)); // returns 0
console.log(f4(true, 0));  // returns 100

function sumMatrix2(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

console.log("========== sumMatrix2 \n");
console.log(sumMatrix2([[1],[2]]))

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity();
}
console.log('====== theCityThatAlwaysSleeps ======');
console.log(theCityThatAlwaysSleeps());

console.log('====== let for loop =====');
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
console.log('====== let for loop =====');