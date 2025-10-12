const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let dp = Array(n+1).fill(0)

for(let i = 2; i <= n; i++) {
    if(i === 2 || i === 3) dp[i] = 1
    else dp[i] = dp[i-2] + dp[i-3]
}

console.log(dp[n] % 10007)