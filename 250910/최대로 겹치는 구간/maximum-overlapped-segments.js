const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const segments = Array(300).fill(0)

for (let i = 1; i <= n; i++) {
    let [start , end] = input[i].split(" ").map(Number)
    for(let j = start + 150; j <= end - 1 + 150; j++) {
        segments[j]++
    }
}

let maxOverlaps = segments.filter((s) => s > 1).sort((a, b) => b - a)[0]

console.log(maxOverlaps)


