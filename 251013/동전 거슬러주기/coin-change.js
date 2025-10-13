const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

let dp = Array(m + 1).fill(0)

for(let i = 1; i <= m; i++) {
    let min = Infinity
    for(let j = 0; j < coins.length; j++) {
        let c = coins[j]
        if(i >= c) min = Math.min(min, dp[i-c])
    }

    if(min === Infinity) dp[i] = -1
    else dp[i] = min + 1
}

console.log(dp[m])