const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const offset = 100
const maxLength = 300

let arr = Array(maxLength).fill(0).map(() => Array(maxLength).fill(0))

for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map((i) => Number(i) + offset)
    for(let j = x1; j < x2; j++) {
        for(let k = y1; k < y2; k++) {
            if(i % 2 !== 0) {
                arr[j][k] = 1
            } else {
                arr[j][k] = 2
            }
        }
    }
}

let blueArea = 0

for(let i = 0; i < maxLength; i++) {
    for(let j = 0; j < maxLength; j++) {
        if(arr[i][j] === 2) blueArea++
    }
}

console.log(blueArea)