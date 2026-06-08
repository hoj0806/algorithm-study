const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.


function solution(n) {
    if (n <= 2) {
        return n
    }

    return solution(Math.floor(n / 3)) + solution(n - 1)
}

console.log(solution(n))