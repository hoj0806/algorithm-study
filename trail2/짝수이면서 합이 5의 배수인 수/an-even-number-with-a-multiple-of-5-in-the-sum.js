const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function solution(n) {
    let sum = 0
    let z = n
    while (true) {
        if (z === 0) {
            break
        }

        sum += z % 10
        z = Math.floor(z / 10)
    }

    if (n % 2 === 0 && sum % 5 === 0) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(solution(n))