const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const floors = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.






let answer = -1

for (let z = 0; z < 3; z++) {
    let dp = Array(n).fill(-1).map(() => Array(3).fill(-1))
    dp[0][z] = floors[0][z]


    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                if (j === k) continue
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + floors[i][j])
            }
        }
    }

    for (let p = 0; p < 3; p++) {
        if (p === z) continue
        answer = Math.max(answer, dp[n-1][p])
    }
}

console.log(answer)






