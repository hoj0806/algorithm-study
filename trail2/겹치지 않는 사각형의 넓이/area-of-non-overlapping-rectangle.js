const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.

let matrix = Array(3000).fill(0).map(() => Array(3000).fill(0))
const OFFSET = 1000
let [Ax1, Ay1, Ax2, Ay2] = rectA
let [Bx1, By1, Bx2, By2] = rectB
let [Cx1, Cy1, Cx2, Cy2] = rectM

for (let i = Ax1; i < Ax2; i++) {
    for (let j = Ay1; j < Ay2; j++) {
        matrix[i + OFFSET][j + OFFSET] = 1
    }
}

for (let i = Bx1; i < Bx2; i++) {
    for (let j = By1; j < By2; j++) {
        matrix[i + OFFSET][j + OFFSET] = 1
    }
}

for (let i = Cx1; i < Cx2; i++) {
    for (let j = Cy1; j < Cy2; j++) {
        matrix[i + OFFSET][j + OFFSET] = 0
    }
}

let cnt = 0

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== 0) cnt++
    }
}

console.log(cnt)