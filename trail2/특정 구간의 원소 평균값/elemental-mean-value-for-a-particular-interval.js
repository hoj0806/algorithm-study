const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let cnt = 0

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n + 1; j++) {
    let slice = arr.slice(i, j)
    let average = slice.reduce((a, b) => a + b, 0) / slice.length
    if (slice.indexOf(average) !== -1) {
      cnt++
    }

  }
}

console.log(cnt)