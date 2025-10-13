const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);

let dp = Array(n).fill(0)
dp[0] = 1

for(let i = 1; i < n; i++) {
    if(a[i] > a[i-1]) {
        dp[i] = dp[i-1] + 1
    } else {
        let max = -1
        for(let j = 0; j < i; j++) {
            if(a[j] < a[i]) max = Math.max(max, dp[j])
        }
        dp[i] = max + 1
    }
}

console.log(Math.max(...dp))