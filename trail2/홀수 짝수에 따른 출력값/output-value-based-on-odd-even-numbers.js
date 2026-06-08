const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.


function solution(n) {
    if (n === 1 || n === 2) {
        return n
    }

    return solution(n - 2) + n
}

console.log(solution(n))