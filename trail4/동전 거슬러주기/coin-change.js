const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

// Please Write your code here.


// dp[n] n원을 거슬러주기 위해 필요한 최소 동전의 갯수

// n이 동전들보다 작은경우 -> 0

// n이 동전들보다 크거나 같은경우

// dp[i - coin]의 max값 +1 (coin <= i)


let dp = Array(m + 1).fill(Infinity)

dp[0] = 0
for (let i = 1; i <= m; i++) {
    for (let j = 0; j < n; j++) {
        let coin = coins[j]
        if (i >= coin) {

            if (dp[i - coin] === Infinity) continue
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }

}

console.log(dp[m] === Infinity ? -1 : dp[m])
