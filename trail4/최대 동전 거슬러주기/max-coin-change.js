const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

// Please write your code here.


let dp = Array(m + 1).fill(-1)

dp[0] = 0


for (let i = 1; i <= m; i++) {
    for (let j = 0; j < n; j++) {
        let c = coin[j]
        if (i >= c) {
            if (dp[i - c] === -1) continue
            dp[i] = Math.max(dp[i], dp[i - c] + 1)
        }
    }
}


console.log(dp[m])
