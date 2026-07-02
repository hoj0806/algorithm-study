const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let dp = Array(n + 1).fill(0)

for (let i = 1; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i - 1], arr[i - 1])
}

dp.shift()

console.log(Math.max(...dp))

