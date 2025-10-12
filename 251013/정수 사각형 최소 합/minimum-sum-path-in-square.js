const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(n).fill(0).map(() => Array(n).fill(0))


for(let i = 0; i < n; i++) {
    for(let j = n - 1; j >= 0; j--) {
        if(i === 0  && j === n-1) {
            dp[i][j] = num[i][j]
        } else if(i === 0) {
            dp[i][j] = dp[i][j+1] + num[i][j]
        } else if(j === n-1) {
            dp[i][j] = dp[i-1][j] + num[i][j]
        } else {
            dp[i][j] = Math.min(
                dp[i][j+1],
                dp[i-1][j] 
            ) + num[i][j]
        }
    }
}

console.log(dp[n-1][0])