const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


let cnt = 0

function solution(n) {
    if (n === 1) {
        return
    }

    if (n % 2 === 0) {
        solution(n / 2)
        cnt++
    } else {
        solution(parseInt(n / 3))
        cnt++
    }
}

solution(n)
console.log(cnt)