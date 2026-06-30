const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let answer = []
let visited = Array(n).fill(0).map(() => Array(n).fill(false))
let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

function canGo(x, y) {
    if (!isRange(x, y))
        return false

    if (visited[x][y] === true || grid[x][y] === 0)
        return false

    return true
}

function dfs(x, y) {
    let count = 1
    visited[x][y] = true

    for (let i = 0; i < dx.length; i++) {
        let newX = x + dx[i]
        let newY = y + dy[i]
        if (canGo(newX, newY)) {
            count += dfs(newX, newY)
        }
    }
    return count
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) {
            answer.push(dfs(i, j))
        }
    }
}

console.log(answer.length)
console.log(answer.sort((a, b) => a - b).join('\n'))
