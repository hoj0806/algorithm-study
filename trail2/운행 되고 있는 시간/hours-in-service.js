const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let max = -1

for (let i = 0; i < n; i++) {
    let arr = Array(1001).fill(0)
    for (let j = 0; j < n; j++) {
        if (i === j) {
            continue
        }

        let [start, end] = segments[j]
        for (let k = start; k < end; k++) {
            arr[k] = 1
        }
    }
   max = Math.max(max, arr.filter(v => v === 1).length)
}

console.log(max)