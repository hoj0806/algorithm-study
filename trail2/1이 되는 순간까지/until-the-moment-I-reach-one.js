const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function solution(n) {
    if (n === 1) {
        return 0
    }

    return solution(n % 2 === 0 ? n / 2 : parseInt(n / 3)) + 1
}

console.log(solution(n))