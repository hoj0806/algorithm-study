const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function solution(y) {
    if (y % 4 === 0) {
        if (y % 100 !== 0) {
            return true
        } else {
            if (y % 400 === 0) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

console.log(solution(y))
