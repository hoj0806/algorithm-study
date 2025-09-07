const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function solution(n) {
    let sum = 0
    for(let i = 1; i <= n; i++) {
        sum+=i
    }

    return parseInt(sum / 10)
}

let answer = solution(n)

console.log(answer)