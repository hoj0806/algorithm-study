const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let maxHeight = Math.max(...h)

let max = -1

for (let i = 1; i <= maxHeight; i++) {
    let over = false
    let cnt = 0
    for (let j = 0; j < n; j++) {

        if (over === true) {
            if (h[j] <= i) {
                over = false
            }
        } else if (over === false) {
            if (h[j] > i) {
                over = true
                cnt++
            }
        }

    }
    max = Math.max(max, cnt)
}

console.log(max)