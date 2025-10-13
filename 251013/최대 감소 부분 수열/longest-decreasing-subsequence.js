const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let dp = Array(n).fill(0)
dp[0] = arr[0]

for(let i = 1; i < n; i++) {
    let max = 0
    for(let j = 0; j < i; j++) {
        if(arr[i] < arr[j]) max = Math.max(max, dp[j])
    }
    dp[i] = max + 1
}

console.log(Math.max(...dp))