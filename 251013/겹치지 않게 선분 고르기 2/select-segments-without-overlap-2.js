const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dp = Array(n).fill(0)

dp[0] = 1


for(let i = 1; i < n; i++) {
    let [x1, y1] = segments[i]
    let [x2, y2] = segments[i-1]
    let max = -1
   if (y1 < x2 || y2 < x1) {
        dp[i] = dp[i-1] + 1
    } else {
        let max = 0
        for(let j = 0; j < i; j++) {
            max = Math.max(max, dp[j])
        }
        if(i === 1) dp[i] = max
        else dp[i] = max + 1
    }
}

console.log(Math.max(...dp))