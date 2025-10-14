const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

// Please write your code here.

let dp = Array(m+1).fill(0)
dp[0] = 0



for(let i = 1; i <= m; i++) {
    let max = -1
    for(let j = 0; j < coin.length; j++) {
        let c = coin[j]
        if(c <= i) max = Math.max(max, dp[i-c])
    }

    if(max === -1) {
        dp[i] = -1
    } else {
        dp[i] = max + 1
    }
    
}

console.log(dp[m])