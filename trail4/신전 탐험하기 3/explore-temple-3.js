const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const treasure = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(n).fill(-1).map(() => Array(m).fill(-1))


for (let i = 0; i < m; i++) {
    dp[0][i] = treasure[0][i]
}


for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {

        for (let k = 0; k < m; k++) {
            if (j === k) continue
            dp[i][j] = Math.max(dp[i][j], treasure[i][j] + dp[i - 1][k])
        }
    }
}


console.log(Math.max(...dp[n - 1]))