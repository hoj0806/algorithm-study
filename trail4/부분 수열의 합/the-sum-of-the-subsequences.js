const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


let dp = Array(m + 1).fill(-1)

dp[0] = 0

for (let i = 0; i < n; i++) {
    for (let j = m; j >= 1; j--) {
        if (j >= arr[i]) {
            if (dp[j - arr[i]] === -1) continue

            dp[j] = Math.max(dp[j], dp[j - arr[i]] + 1)
        }
    }
}

console.log(dp[m] === -1 ? "No" : "Yes")