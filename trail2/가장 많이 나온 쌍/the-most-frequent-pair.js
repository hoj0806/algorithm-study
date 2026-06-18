const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

// Please Write your code here.

let max = -1

for (let i = 0; i < pairs.length; i++) {
    let x = pairs[i].sort().join("")
    let cnt = 1
    for (let j = i + 1; j < pairs.length; j++) {
        let y = pairs[j].sort().join("")
        if (x === y) {
            cnt++
        }
    }
    max = Math.max(max, cnt)
}

console.log(max)