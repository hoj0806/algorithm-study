const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.


let prefixSum = Array(n + 1).fill(0)
let cnt = 0

for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1]
}

for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
        let num = prefixSum[i] - prefixSum[j]
        if (num === k) cnt++
    }
}

console.log(cnt)