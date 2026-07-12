const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(" ").map(Number);
    arr.push([x1, 1])
    arr.push([x2, -1])
}

arr.sort((a, b) => a[0] - b[0])

let max = 0
let sum = 0

let hash = {}

for (let i = 0; i < arr.length; i++) {
    let [_, y] = arr[i]
    if (y === 1) {
        sum += 1
    } else if (y === -1) {
        sum -= 1
    }
    max = Math.max(max, sum)
}

console.log(max)