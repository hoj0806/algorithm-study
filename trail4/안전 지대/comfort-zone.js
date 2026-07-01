const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + Number(n)).map(line => line.split(' ').map(Number));

// Please Write your code here.



let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]
let visited = Array(n).fill(0).map(() => Array(m).fill(false))

function canGo(a, b) {
    if (a < 0 || a >= n || b < 0 || b >= m) return false;

    if (visited[a][b] === true) return false;

    return true;
}


function dfs(x, y, rain) {
    visited[x][y] = true

    for (let i = 0; i < dx.length; i++) {
        let newX = x + dx[i]
        let newY = y + dy[i]
        if (canGo(newX, newY) && grid[newX][newY] > rain) {
            dfs(newX, newY, rain)
        }
    }

}

let k = 0
let max = -1


for (let precipitation = 1; precipitation <= 100; precipitation++) {

    let cnt = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] > precipitation && !visited[i][j]) {
                dfs(i, j, precipitation)
                cnt++
            }
        }
    }
    if (cnt > max) {
        max = cnt
        k = precipitation
    }
    visited = Array(n).fill(0).map(() => Array(m).fill(false))
}


console.log(k, max)