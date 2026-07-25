const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.


function solution(n) {
    if (n === 0) {
        return
    }
    solution(n - 1)
    process.stdout.write(n + " ")
}

function solution2(n) {
    if (n === 0) {
        return
    }
    process.stdout.write(n + " ")
    solution2(n - 1)
}

solution(n)
console.log()
solution2(n)