const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.


// dp[n] 2xn의 사각형울 1x2 , 2x1 크기의 사각형들로 채우는 방법의 수

// dp[0] -> 1
// dp[1] -> 1
// dp[2] -> 2
// dp[3] -> 3
// dp[4] -> dp[3] + dp[2] (한칸이
//  비워졋을때 옆에 세로로 긴 타일을 붙였기 때문에 두칸남았을때 그대로 dp[2]를 더해주면됨)


let dp = Array(n + 1).fill(0)

dp[0] = 1
dp[1] = 1
dp[2] = 2
dp[3] = 3


for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
}

console.log(dp[n])