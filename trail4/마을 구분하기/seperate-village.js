const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let visited = Array(n).fill(false).map(() => Array(n).fill(false))

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]
let cnt = 0

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}


function dfs(x, y) {
    visited[x][y] = true
    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (isRange(nx, ny) && visited[nx][ny] === false && grid[nx][ny] === 1) {
            dfs(nx, ny)
            cnt++
        }
    }
}

let answer = []
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && visited[i][j] === false) {
            cnt = 1
            dfs(i, j)
            answer.push(cnt)
        }
    }
}

console.log(answer.length)
console.log(answer.sort((a, b) => a - b).join('\n'))