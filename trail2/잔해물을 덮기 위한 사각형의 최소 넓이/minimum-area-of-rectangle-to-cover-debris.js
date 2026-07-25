const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

const OFFSET = 1000

let matrix = Array(3000).fill(0).map(() => Array(3000).fill(0))

// 첫번째 사각형 칠하기

let [x1, y1, x2, y2] = rect1
let [x3, y3, x4, y4] = rect2


for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
        matrix[i + OFFSET][j + OFFSET] = 1
    }
}

// 두번째 사각형으로 덮기

for (let i = x3; i < x4; i++) {
    for (let j = y3; j < y4; j++) {
        matrix[i + OFFSET][j + OFFSET] = 0
    }
}

// 배열 순회하면서 x 최대 최소, y 최대 최소값 구하기

let xMax = -Infinity
let xMin = Infinity
let yMax = -Infinity
let yMin = Infinity

let cnt = 0
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
            cnt++
            xMax = Math.max(i, xMax)
            xMin = Math.min(i, xMin)
            yMax = Math.max(j, yMax)
            yMin = Math.min(j, yMin)
        }
    }
}


let x = (xMax - xMin) + 1
let y = (yMax - yMin) + 1

let answer = x * y

console.log(cnt === 0 ? 0 : answer)