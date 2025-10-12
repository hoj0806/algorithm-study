const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8").trim());

let dp = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 0;
if (n >= 2) dp[2] = 1;
if (n >= 3) dp[3] = 1;

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

console.log(dp[n] % 100007);
