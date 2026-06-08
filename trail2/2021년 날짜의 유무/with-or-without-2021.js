const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

let arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function solution(m, d) {
    if (d <= arr[m]) return "Yes"
    return "No"
}

console.log(solution(m, d))