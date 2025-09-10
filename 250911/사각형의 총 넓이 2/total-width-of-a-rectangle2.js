const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let sum = 0
let arr = Array(300).fill(0).map(() => Array(300).fill(0))

for(let i = 0; i < rects.length; i++) {
    let [x1, y1, x2, y2] = rects[i].map((i) => i + 150)
    for(let i = x1; i <= x2 - 1; i++) {
        for(let j = y1; j <= y2 - 1; j++) {
            if(arr[i][j] !== 1) {
                arr[i][j] = 1
                sum++
            }
        }
    }
}

console.log(sum)