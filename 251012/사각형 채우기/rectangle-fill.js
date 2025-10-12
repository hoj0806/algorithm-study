const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let dp = Array(n + 1).fill(0)
const MOD = 10007
dp[1] = 1
dp[2] = 2

for(let i = 3; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % MOD
}

console.log(dp[n])