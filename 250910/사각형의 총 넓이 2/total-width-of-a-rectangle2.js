const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let sum = 0
let xy = []

for(let i = 0; i < rects.length; i++) {
    let [x1, y1, x2, y2] = rects[i]
    for(let i = x1; i <= x2 - 1; i++) {
        for(let j = y1; j <= y2 - 1; j++) {
            let str = String(i) + String(j)
            if(xy.indexOf(str) === - 1) {
                sum++
                xy.push(str)
            }
        }
    }
}
console.log(sum)