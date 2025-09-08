const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function sum(n) {
    if(n === 1) {
        return 1
    }
    return sum(n - 2) + n
}

function sum2(n) {
    if(n === 2) {
        return 2
    }

    return sum2(n - 2) + n
}

console.log(n % 2 === 0 ? sum2(n) : sum(n))