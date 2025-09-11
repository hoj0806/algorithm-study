const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.



let dx = [0, 1, 0 , -1]
let dy = [1, 0, -1 , 0]

let answer = 0
for(let i = 0; i <n; i++) {
    for(let j = 0; j < n; j++) {
        let cnt = 0
        for(let k = 0; k < 4; k++) {
           if(isRange(i + dx[k], j + dy[k])) {
            if(grid[i + dx[k]][j + dy[k]] === 1) {
                cnt++
            }
           }
        }
        if(cnt >= 3) {
            answer++
        }
    }
}

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

console.log(answer)