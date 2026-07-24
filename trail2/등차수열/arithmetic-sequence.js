const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


let max = 0
for (let i = 1; i <= 100; i++) {
    let cnt = 0
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (j === k || j > k) continue
            if (arr[j] + arr[k] === 2 * i) cnt++
        }
    }
    max = Math.max(max, cnt)
}

console.log(max)
