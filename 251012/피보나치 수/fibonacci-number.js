const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let dp = Array(n).fill(0)

dp[0] = 1
dp[1] = 1

for(let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
}

console.log(dp[n-1])