const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(n + 1).fill(-1).map(() => Array(m + 1).fill(-1))

dp[0][0] = 0

for (let i = 1; i <= n; i++) {
    let [weight, value] = jewels[i - 1]
    for (let j = 0; j <= m; j++) {
        dp[i][j] = dp[i-1][j]

        if(j >= weight) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight] + value)
        }
    }
}

let max = -1

for(let i = 0; i < dp.length; i++) {
    for(let j = 0; j < dp[i].length; j++) {
        max = Math.max(max, dp[i][j])
    }
}

console.log(max)