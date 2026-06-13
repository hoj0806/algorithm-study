const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let min = Number.MAX_SAFE_INTEGER

for (let i = 0; i < n; i++) {
    let [x1, y1] = points[i]
    for (let j = i + 1; j < n; j++) {
        let [x2, y2] = points[j]
        min = Math.min(min,
            (Math.abs(x2 - x1) ** 2) + (Math.abs(y2 - y1) ** 2)
        )

    }
}

console.log(min)