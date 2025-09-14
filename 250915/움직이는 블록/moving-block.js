const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let sum = blocks.reduce((a, c) => a + c)

let average = sum / n


let answer = 0

blocks.forEach((b) => {
    if(b > average) {
        answer += (b - average)
    }
})

console.log(answer)