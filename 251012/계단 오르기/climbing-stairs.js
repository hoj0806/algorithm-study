const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let dp = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 0;


for (let i = 2; i <= n; i++) { 
    if(i === 2 || i === 3) dp[i] = 1
    else dp[i] = dp[i - 2] + dp[i - 3];
}

console.log(dp[n] % 10007);
