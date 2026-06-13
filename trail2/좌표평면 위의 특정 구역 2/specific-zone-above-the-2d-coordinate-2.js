const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// Please Write your code here.


let answer = Number.MAX_SAFE_INTEGER

for (let i = 0; i < n; i++) {
    let minX = Number.MAX_SAFE_INTEGER
    let maxX = -1
    let minY = Number.MAX_SAFE_INTEGER
    let maxY = -1

    for (let j = 0; j < n; j++) {
        if (i === j) {
            continue
        }
        let [x, y] = points[j]

        minX = Math.min(minX, x)
        maxX = Math.max(maxX, x)
        minY = Math.min(minY, y)
        maxY = Math.max(maxY, y)
    }
    answer = Math.min(answer, (maxX - minX) * (maxY - minY))
}

console.log(answer)