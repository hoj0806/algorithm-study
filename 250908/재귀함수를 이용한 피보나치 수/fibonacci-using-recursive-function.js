const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function solution(n) {
    if(n === 1 || n === 2) {
        return 1
    }

    return solution(n - 1) + solution(n - 2)
}

let answer = solution(n)

console.log(answer)