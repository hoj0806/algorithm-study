const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let answer = 0


function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        let cnt = 0

        for (let k = 0; k < dx.length; k++) {
            let x = i + dx[k]
            let y = j + dy[k]
            if (isRange(x, y) && grid[x][y] === 1) {
                cnt++
            }
        }
        if(cnt >= 3) answer++
    }
}

console.log(answer)