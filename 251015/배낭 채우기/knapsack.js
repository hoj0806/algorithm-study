const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.


// dp[i][j] = i번째까지의 보석까지 고려했을때 총 무게가 j을 넘지 않을때 최대 가치의 합


let dp = Array(n+1).fill(0).map(() => Array(m+1).fill(0))

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
        let [weight, value] = jewels[i-1]
            if(j >= weight) {
                dp[i][j] = Math.max(dp[i-1][j-weight] + value, dp[i-1][j]) 
            } else {
                dp[i][j] = dp[i-1][j]
            }
    }
}

console.log(dp[n][m])
