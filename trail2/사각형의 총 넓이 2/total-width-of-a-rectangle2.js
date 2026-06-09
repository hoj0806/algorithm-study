const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let matrix = Array(3000).fill(0).map(() => Array(3000).fill(0));
const OFFSET = 1000

for (let i = 0; i < rects.length; i++) {
    let [x1, y1, x2, y2] = rects[i]

    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            matrix[j + OFFSET][k + OFFSET] = 1
        }
    }
}


let cnt = 0

for(let i =0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] !== 0) cnt++
    }
}

console.log(cnt)


