const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.


let visited = Array(n).fill(false).map(() => Array(m).fill(false))

let dx = [0, 1]
let dy = [1, 0]

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}

function dfs(x, y) {
    visited[x][y] = true
    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (isRange(nx, ny) && visited[nx][ny] === false && grid[nx][ny] === 1) {
            dfs(nx, ny)
        }
    }
}

dfs(0, 0)
console.log(visited[n-1][m-1]++)