const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.

let dp = Array(n).fill(0).map(() => Array(m).fill(0))

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(i === 0 && j === 0) {
            dp[i][j] = 1
        } else if(i === 0) {
            dp[i][j] = 0
        } else if(j === 0) {
            dp[i][j] = 0
        } else {
            let max = 0
            for(x = 0; x < i; x++) {
                for(let y = 0; y < j; y++) {
                    if(grid[x][y] < grid[i][j]) max = Math.max(max, dp[x][y])
                }
            }
            dp[i][j] = max + 1
        }
    }
}

let answer = -1

for(let i  =0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        answer = Math.max(answer, dp[i][j])
    }
}

console.log(answer)