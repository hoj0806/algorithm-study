const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

// Please Write your code here.
arr.shift()

let max = -1

for (let i = 0; i < n; i++) {
    let copy = [...arr]

    let moveIdx = i
    let sum = 0
    for (let j = 1; j <= m; j++) {
        sum += copy[moveIdx]
        moveIdx = copy[moveIdx] - 1
    }

    max = Math.max(max, sum)
}

console.log(max)