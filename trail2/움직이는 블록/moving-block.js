const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// Please Write your code here.


let number = blocks.reduce((a, b) => a + b) / n

let answer = 0

for (let i = 0; i < n; i++) {
    if (number > blocks[i]) {
        answer += (number - blocks[i])
    }
}
console.log(answer)