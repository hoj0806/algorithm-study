const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let answer = Infinity

for(let i = 0; i < points.length; i++) {
    for(let j = i + 1; j < points.length; j++) {
        let [x1, y1] = points[i]
        let [x2, y2] = points[j]
        answer = Math.min(answer , (x1-x2)**2 + (y1-y2)**2)
    }
}

console.log(answer)