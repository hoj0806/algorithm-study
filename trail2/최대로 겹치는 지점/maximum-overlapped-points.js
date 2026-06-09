const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];


for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.

let arr = Array(101).fill(0)

segments.forEach((item) => {
    let [start, end] = item
    for (let i = start; i <= end; i++) {
        arr[i] += 1
    }
})

console.log(Math.max(...arr))