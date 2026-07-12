const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

// Please Write your code here.

let sArr = arr.sort((a, b) => a - b)

let left = 0
let right = n - 1
let cnt = 0
while (left < right) {
    let sum = sArr[left] + sArr[right]

    if (sum > k) {
        right--
    } else if (sum <= k) {
        cnt += (right - left)
        left++
    }
}

console.log(cnt)