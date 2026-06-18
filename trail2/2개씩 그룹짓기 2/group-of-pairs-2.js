const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number).sort((a, b) => a - b)

// Please write your code here.


let answer = Infinity


for(let i = 0; i < n; i++) {
    answer = Math.min(answer, arr[i+n] - arr[i])
}

console.log(answer)