const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please write your code here.


let dp = Array(n + 1).fill(0)
let numbers = [1, 2, 5]

dp[0] = 1

for (let i = 1; i <= n; i++) {
    let sum = 0

    for (let j = 0; j < numbers.length; j++) {
        if (i >= numbers[j]) {
            sum += (dp[i - numbers[j]]) 
        }
    }

    dp[i] = sum % 10007
}

console.log(dp[n])