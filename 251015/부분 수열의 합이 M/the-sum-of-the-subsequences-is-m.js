const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.


let dp = Array(m+1).fill(Infinity)
dp[0] = 0

for(let i = 0; i < arr.length; i++) {
   for(let j = m; j >= 0; j--) {
        if(j >= arr[i]) {
            if(dp[j-arr[i]] === Infinity) continue
            dp[j] = Math.min(dp[j], dp[j-arr[i]] + 1)
        }
   }
}

if(dp[m] === Infinity) {
    console.log(-1)
} else {
    console.log(dp[m])
}

    