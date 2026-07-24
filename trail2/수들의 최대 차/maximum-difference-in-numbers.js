const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.



let sArr = arr.sort((a, b) => a - b)
let min = sArr[0]
let len = sArr.length

let answer = 0

for (let i = 0; i < len; i++) {
  let min = sArr[i]
  for (let j = len - 1; j >= i; j--) {
    let max = sArr[j]
    if (max - min <= k) answer = Math.max(answer, j - i + 1)
  }
}

console.log(answer)