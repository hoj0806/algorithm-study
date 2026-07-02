const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.


// dp[i] : i번째까지 도달할때 뛸수있는 최대 점프횟수

let dp = Array(n).fill(-1)

dp[0] = 0
for (let i = 1; i < n; i++) {

    // i번째전까지의 모든 점프판중에서 i번째로 도달가능한 점프판중에 최대값을 구해 +1 더하기

    for (let j = 0; j < i; j++) {
        if (dp[j] !== -1 && j + arr[j] >= i) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }


}

console.log(Math.max(...dp))