const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let matrix = Array(300).fill(0).map(() => Array(300).fill(0))

const OFFSET = 150

for (let i = 0; i < rects.length; i++) {
    let [x1, y1] = rects[i]
    for (let j = x1; j < x1 + 8; j++) {
        for (let k = y1; k < y1 + 8; k++) {
            matrix[j + OFFSET][k + OFFSET] = 1
        }
    }
}

let cnt = 0

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== 0) cnt++
    }
}

console.log(cnt)