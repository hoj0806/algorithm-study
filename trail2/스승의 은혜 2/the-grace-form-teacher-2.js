const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let max = -1
p.sort((a, b) => a - b)

for (let i = 0; i < n; i++) {
    let sum = 0
    let cnt = 0
    for (let j = 0; j < n; j++) {

        if (sum >= b) {
            break
        }

        if (i === j) {
            sum += (p[j] / 2)
        } else {
            sum += p[j]
        }
        cnt++
    }

    if (sum > b) cnt--

    max = Math.max(max, cnt)



}

console.log(max)