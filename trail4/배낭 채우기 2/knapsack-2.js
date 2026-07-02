const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(m + 1).fill(-1)
dp[0] = 0


for (let i = 1; i <= m; i++) {
    let max = -1
    for (let j = 0; j < n; j++) {
        let [weight, value] = jewels[j]
        if (i >= weight) {
            if (dp[i - weight] === -1) continue
            max = Math.max(max, dp[i - weight] + value)
        }
    }

    dp[i] = max
}

console.log(Math.max(...dp))