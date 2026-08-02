const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + Number(n)).map(line => line.split(' ').map(Number));

// Please Write your code here.

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]
let visited = Array(n).fill(false).map(() => Array(m).fill(false))
let max = -1
function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}

let cnt = 0
let k = 0
function dfs(x, y, rain) {
    visited[x][y] = true

    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (isRange(nx, ny) && visited[nx][ny] === false && grid[nx][ny] > rain) {
            dfs(nx, ny, rain)
        }
    }

}

for (let i = 1; i <= 100; i++) {
    cnt = 0
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (grid[j][k] > i && visited[j][k] === false && isRange(j, k)) {
                cnt += 1
                dfs(j, k, i)
            }
        }
    }
    if (cnt > max) {
        max = cnt
        k = i
    }
    visited = Array(n).fill(false).map(() => Array(m).fill(false))
}

console.log(k, max)