const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.


let cnt = 0

for (let i = 0; i < n; i++) {
    let isOverLapped = false
    for (let j = 0; j < n; j++) {
        if (i === j) continue

        let [x1, y1] = segments[i]
        let [x2, y2] = segments[j]
        if (!((x2 > x1 && y2 > y1) || (x2 < x1 && y2 < y1))) {
            isOverLapped = true
            break
        }
    }
    if (!isOverLapped) cnt++
}

console.log(cnt)