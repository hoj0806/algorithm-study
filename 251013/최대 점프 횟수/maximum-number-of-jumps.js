const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);

let dp = Array(n).fill(-1)
dp[0] = 0

for(let i = 1; i < n; i++) {

  for(let j = 0; j < i; j++) {
    if(a[j] === -1) continue 

    if(a[j] + j >= i) dp[i] = Math.max(dp[i], dp[j] + 1)
  }

}


console.log(Math.max(...dp))