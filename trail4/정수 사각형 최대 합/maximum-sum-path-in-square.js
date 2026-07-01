const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(n).fill(0).map(() => Array(n).fill(0))


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 && j === 0) {
            dp[i][j] = num[i][j]
        } else if (i === 0) {
            dp[i][j] = num[i][j] + dp[i][j - 1]
        } else if (j === 0) {
            dp[i][j] = num[i][j] + dp[i - 1][j]
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + num[i][j]
        }
    }
}


let max = -Infinity

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        max = Math.max(max, dp[i][j])
    }
}

console.log(max)