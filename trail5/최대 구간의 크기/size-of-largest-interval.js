const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    arr.push([x, 1])
    arr.push([y, -1])
}

arr.sort((a, b) => a[0] - b[0])

let count = 0
let start = 0
let max = -1

for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
        start = arr[i][0]
    }

    count += arr[i][1]

    if (count === 0) max = Math.max(max, arr[i][0] - start)
}

console.log(max)