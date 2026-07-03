const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const floors = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(n).fill(0).map(() => Array(3).fill(0))


for (let i = 0; i <= 2; i++) {
    dp[0][i] = floors[0][i]
}

for (let j = 1; j < n; j++) {
    for (let k = 0; k <= 2; k++) {
        for (let p = 0; p <= 2; p++) {
            if (k === p) continue
            let newVal = dp[j-1][p] + floors[j][k]
            dp[j][k] = Math.max(dp[j][k], newVal)
        }
    }
}



console.log(Math.max(...dp[n-1]))
