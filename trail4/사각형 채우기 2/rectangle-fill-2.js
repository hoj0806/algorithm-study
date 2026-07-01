const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

// dp[0] -> 1
// dp[1] -> 1
// dp[2] -> 3
// dp[3] -> dp[2] + (dp[1] * 2) -> 한칸남았을때 세로로 긴 한칸짜리 타일을 썻으므로 dp[1]
// 에서 쓸수있는 경우의 수는 2 x2 하나를 쓰는 경우의 2x1 두개를 쓰는 경우기 때문에 2를 곱해줌

// 따라서 점화식은 

// n > 2
// dp[n] = dp[n-1] + (dp[n-2] * 2)

let dp = Array(n + 1).fill(0)
dp[0] = 1
dp[1] = 1
dp[2] = 3

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + (dp[i - 2] * 2)) % 10007
}

console.log(dp[n])