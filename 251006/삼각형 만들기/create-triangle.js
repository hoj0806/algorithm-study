const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.

let answer = 0
for(let i = 0; i < points.length; i++) {
    for(let j = i+1; j < points.length; j++) {
        for(let k = j+1; k < points.length; k++) {
            let [x1, y1] = points[i]
            let [x2, y2] = points[j]
            let [x3, y3] = points[k]
            let p1 = x1 === x2 || x2 === x3 || x1 === x3
            let p2 = y1 === y1 || y2 === y3 || y1 === y3

            if(p1 && p2) {
                let maxX = Math.max(x1, x2, x3)
                let minX = Math.min(x1, x2, x3)
                let maxY = Math.max(y1, y2, y3)
                let minY = Math.min(y1, y2, y3)
                let m = maxX - minX
                let n = maxY - minY
                answer = Math.max(answer, m * n)
            }
        }
    }
}

console.log(answer)