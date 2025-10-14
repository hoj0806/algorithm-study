const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let dp = Array(n + 1).fill(0)
const MOD = 10007

dp[0] = 0
dp[1] = 1
dp[2] = 2
dp[3] = 3
dp[4] = 5

for(let i = 5; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-3] - dp[i-4]) % 10007
}

console.log(dp[n])