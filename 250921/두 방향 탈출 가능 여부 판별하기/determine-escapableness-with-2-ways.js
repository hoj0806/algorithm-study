const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.



let visited = Array(n).fill(0).map(() => Array(m).fill(false))

function dfs(x, y) {
    let dx = [0, 1]
    let dy = [1, 0]

    visited[x][y] = true

    for(let i = 0; i < dx.length; i++) {
        let newX = x + dx[i]
        let newY = y + dy[i]

        if(canGo(newX, newY)) {
            dfs(newX, newY)
        }
    }
}


function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}

function canGo(x, y) {
    if(!isRange(x, y)) {
        return false
    }

    if(grid[x][y] === 0 || visited[x][y]) {
        return false
    }

    return true
}

dfs(0, 0)

console.log(visited[n-1][m-1] === true ? 1 : 0)