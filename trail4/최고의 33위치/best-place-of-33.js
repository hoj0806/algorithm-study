const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let max = -1

for(let i = 0; i < n - 2; i++) {
    for(let j = 0; j < n - 2; j++) {
        let cnt = 0
        for(let p = i; p <= i + 2; p++) {
            for(let q = j; q <= j + 2; q++) {
                if(grid[p][q] === 1) cnt++
            }
        }
        max = Math.max(max, cnt)
    }
}

console.log(max)