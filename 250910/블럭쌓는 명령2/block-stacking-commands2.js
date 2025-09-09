const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

let arr = Array(n).fill(0)

console.log(arr)

for(let i = 0; i < segments.length; i++) {
    console.log(segments[i])
    let [start, end] = segments[i].split("").map((i) => i - 1)
    console.log(start, end)
}