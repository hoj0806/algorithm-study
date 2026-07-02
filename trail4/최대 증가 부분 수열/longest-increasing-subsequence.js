const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);

// Please Write your code here.


// dp[i] : i번째 원소를 마지막으로 하는 LIS의 길이



let dp = Array(n).fill(0)

for (let i = 0; i < n; i++) {
    if (i === 0) {
        dp[i] = 1
    } else {
        let max = 0
        for (let j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max + 1
    }
}
console.log(Math.max(...dp))
