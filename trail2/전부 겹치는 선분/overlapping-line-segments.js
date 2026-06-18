const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.

for (let i = 0; i < n; i++) {
    let [x1, y1] = segments[i]
    for (let j = 0; j < n; j++) {
        if (i === j) continue
        let [x2, y2] = segments[j]
        if (y1 < x2 || y2 < x1) {
            console.log("No")
            return
        }
    }
}

console.log("Yes")