// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printNumber1(n) {
    if (n === 0) {
        return;
    }

    printNumber1(n - 1);
    process.stdout.write(n + " ");
}

function printNumber2(n) {
    if (n === 0) {
        return;
    }

    process.stdout.write(n + " ");
    printNumber2(n - 1);
}

printNumber1(n);
console.log();
printNumber2(n);

