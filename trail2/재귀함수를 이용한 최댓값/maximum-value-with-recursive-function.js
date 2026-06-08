const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

let max = -1

function solution(n) {
    if (n === -1) {
        return 
    }
    if (arr[n] > max) max = arr[n]
    solution(n - 1)
}

solution(n - 1)

console.log(max)