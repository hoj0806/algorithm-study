const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const clothes = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let dp = Array(m).fill(0).map(() => Array(n).fill(-Infinity))


for (let i = 0; i < n; i++) {
    let [start, end, _] = clothes[i]
    if (1 >= start && 1 <= end) {
        dp[0][i] = 0
    }
}


for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
        let [start, end, satisfy] = clothes[j]
        let day = i + 1
        if ((day >= start && day <= end)) {
            for (let k = 0; k < n; k++) {
                if (dp[i - 1][k] !== -Infinity) {
                    let [z, y, pSatisfy] = clothes[k]
                    let newVal = Math.abs(satisfy - pSatisfy) + dp[i - 1][k]
                    dp[i][j] = Math.max(dp[i][j], newVal);
                }
            }
        }
    }
}

console.log(Math.max(...dp[m - 1]))