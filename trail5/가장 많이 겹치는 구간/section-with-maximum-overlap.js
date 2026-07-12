const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

const arr = Array(210000).fill(0)

for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(" ").map(Number);
    arr[x1] += 1
    arr[x2] -= 1
}


let max = 0
let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    max = Math.max(max, sum)
}

console.log(max)

