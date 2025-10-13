const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const dp = Array(n).fill(0).map(() => Array(n).fill(0))

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(i === 0 && j === 0) {
            dp[i][j] = matrix[i][j]
        } else if(i === 0) {
            dp[i][j] = Math.min(dp[i][j-1], matrix[i][j])
        } else if(j === 0) {
            dp[i][j] = Math.min(dp[i-1][j] , matrix[i][j])  
        } else {
            dp[i][j] = Math.max(
                Math.min(dp[i-1][j] , matrix[i][j]) ,
                Math.min(dp[i][j-1] ,  matrix[i][j])
            )
        }
    }
}

console.log(dp[n-1][n-1])