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

for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}