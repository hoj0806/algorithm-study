const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.


function solution(z) {
    if (z === 0) {
        return arr[0]
    }

    return Math.max(solution(z - 1), arr[z]);
}

console.log(solution(n - 1))
