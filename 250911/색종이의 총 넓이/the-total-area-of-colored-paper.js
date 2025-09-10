const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const OFFSET = 1000
let MAX_LENGTH = 2500

let arr = Array(MAX_LENGTH).fill(0).map(() => Array(MAX_LENGTH).fill(0))

for(let i = 0; i < rects.length; i++) {
    let x1 = rects[i][0] + OFFSET
    let y1 = rects[i][1] + OFFSET
    let x2 = x1 + 8
    let y2 = y1 + 8

    for(let j = x1; j < x2; j++) {
        for(let k = y1; k < y2; k++) {
            arr[j][k] = 1
        }
    }

}

let sum = 0

for(let i = 0; i < MAX_LENGTH; i++) {
    for(let j = 0; j < MAX_LENGTH; j++) {
        if(arr[i][j] === 1) sum++
    }
}

console.log(sum)