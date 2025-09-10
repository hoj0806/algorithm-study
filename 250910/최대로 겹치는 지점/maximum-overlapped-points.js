const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// Please Write your code here.
const n = Number(input[0]);

const segments = Array(150).fill(0)

for (let i = 1; i <= n; i++) {
    let [start, end] = input[i].split(" ").map(Number)
    for(let i = start; i <= end; i++) {
        segments[i]++
    }
}


let maxValue = segments.sort((a, b) => b - a)[0]
console.log(maxValue)
