const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function fibo(n) {
    if (n === 1 || n === 2) {
        return 1
    }

    return fibo(n - 1) + fibo(n - 2)
}

let answer = fibo(n)

console.log(answer)