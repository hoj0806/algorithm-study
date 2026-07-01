const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.


let dp = Array(n + 1).fill(0)

dp[0] = 1
dp[1] = 0
dp[2] = 1
dp[3] = 1


for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 3]) % 10007
}


console.log(dp[n] % 10007)

// 반드시 2개 아니면 3개의 계단만 올라갈 수 있음

// dp[n] n층 높이의 계단에 올라가기 뒤한 서로 다른 방법의 수

// dp[0] -> 0
// dp[1] -> 0
// dp[2] -> 1
// dp[3] -> 1
// dp[4] -> 1 (2 + 2)
// dp[5] -> 2 (3+2 ,2 + 3)
// dp[6] -> dp[5] 에서는 방법이 없음 dp[4] + dp[3]
// dp[7] -> dp[6] 에서는 방법이 없음 dp[5] + dp[4]
