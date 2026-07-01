const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));

// Please write your code here.


let visited = Array(n).fill(0).map(() => Array(n).fill(false))
let k = 0;

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function canGo(a, b) {
    if (a < 0 || a >= n || b < 0 || b >= n)
        return false

    if (visited[a][b])
        return false

    return true
}

function dfs(x, y, z) {
    visited[x][y] = true
    k++
    for (let i = 0; i < dx.length; i++) {
        let newX = x + dx[i]
        let newY = y + dy[i]
        if (canGo(newX, newY) && grid[newX][newY] === z) {
            dfs(newX, newY, z)
        }
    }
}

let arr = []

for (let p = 1; p <= 100; p++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === p && !visited[i][j]) {
                k = 0
                dfs(i, j, p)
                arr.push(k)
            }
        }
    }

    visited = Array(n).fill(0).map(() => Array(n).fill(false))
}


let len = arr.filter((i) => 4 <= i).length

console.log(len, Math.max(...arr))