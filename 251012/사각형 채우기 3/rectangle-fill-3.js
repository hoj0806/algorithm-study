const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let dp = Array(n+1).fill(0)
const MOD = 1000000007

dp[1] = 2
dp[2] = 7

for(let i = 3; i <= n; i++) {
    dp[i] = ((dp[i-1] * 2) + (dp[i-2] * 4)) % MOD
}

console.log(dp[n])