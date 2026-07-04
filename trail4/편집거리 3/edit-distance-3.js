const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];
const b = input[1];

// Please Write your code here.


let aLen = a.length
let bLen = b.length

let dp = Array(aLen + 1).fill(0).map(() => Array(bLen + 1).fill(0))



for (let i = 0; i <= aLen; i++) dp[i][0] = i
for (let j = 0; j <= bLen; j++) dp[0][j] = j

for (let i = 1; i <= aLen; i++) {
    for (let j = 1; j <= bLen; j++) {
        if (a[i - 1] === b[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1]
        } else {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
        }
    }
}

console.log(dp[aLen][bLen])