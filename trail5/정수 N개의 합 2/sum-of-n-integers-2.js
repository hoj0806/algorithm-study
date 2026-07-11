const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.


let prefixSum = Array(n + 1).fill(0)


for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1]
}
let max = -Infinity

for (let i = n; i >= 0; i--) {
    if (i - k >= 0) {
        max = Math.max(prefixSum[i] - prefixSum[i - k], max)
    }
}

console.log(max)