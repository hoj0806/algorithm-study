const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// Please Write your code here.


let idx = 0
let answer = Infinity
for(let i = 0; i < points.length; i++) {
    let maxX = -1
    let minX = Infinity
    let maxY = -1
    let minY = Infinity
    for(let j = 0; j < points.length; j++) {
        if(idx === j) continue
        let [x, y] = points[j]
        maxX = Math.max(maxX, x)
        minX = Math.min(minX, x) 
        maxY = Math.max(maxY, y) 
        minY = Math.min(minY, y)

    }
    let m = maxX - minX
    let n = maxY - minY
   
    answer = Math.min(answer , m * n)
    idx++
}

console.log(answer)