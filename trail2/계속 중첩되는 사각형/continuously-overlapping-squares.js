const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

let matrix = Array(2001).fill(0).map(() => Array(2001).fill(0))
const OFFSET = 1000
for (let i = 0; i < rectangles.length; i++) {
    let [x1, y1, x2, y2] = rectangles[i]
    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            if (i % 2 === 0) {
                matrix[j + OFFSET][k + OFFSET] = "R"
            } else {
                matrix[j + OFFSET][k + OFFSET] = "B"
            }
        }
    }
}

let blueCount = 0

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "B") blueCount++
    }
}

console.log(blueCount)