const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please write your code here.
let aLen = str1.length
let bLen = str2.length
let dp = Array(aLen + 1).fill(0).map(() => Array(bLen + 1).fill(0))

for (let i = 0; i <= aLen; i++) dp[i][0] = i;
for (let j = 0; j <= bLen; j++) dp[0][j] = j;

for (let i = 1; i <= aLen; i++) {
    for (let j = 1; j <= bLen; j++) {
        if (str1[i - 1] === str2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1]
        } else {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
    }
}

console.log(dp[aLen][bLen])