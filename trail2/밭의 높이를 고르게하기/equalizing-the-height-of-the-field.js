const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n - t + 1; i++) {
    let sum = 0
    for (let j = i; j < i + t; j++) {
        sum += Math.abs(h - arr[j])
    }
    min = Math.min(min, sum)
}

console.log(min)