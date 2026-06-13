const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.

let min = 0
let idx = 1
for (let i = 1; i < n - 1; i++) {
    let sum = 0
    for (let j = 1; j < n; j++) {
        if (i !== j) {
            if (i + 1 === j) {
                let x = arr[j - 2]
                let y = arr[j]
                sum += Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1])
            } else {
                let x = arr[j - 1]
                let y = arr[j]
                sum += Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1])

            }
        }
    }
    if (i === 1) {
        min = sum
    } else {
        min = Math.min(sum, min)
    }
}

console.log(min)