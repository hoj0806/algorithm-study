const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

let max = -1

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        for (let k = 0; k < n; k++) {
            for (let l = 0; l < n - 2; l++) {
                if (i === k && Math.abs(j - l) < 3) {
                    continue
                }
                max = Math.max(max,
                    grid[i][j] + grid[i][j + 1] + grid[i][j + 2] + grid[k][l] + grid[k][l + 1] + grid[k][l + 2]
                )
            }
        }
    }
}

console.log(max)