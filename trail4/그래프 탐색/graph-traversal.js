const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(' ').map(Number));
}

// Please Write your code here.


let visited = Array(n).fill(false)
let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i = 0; i < m; i++) {
    let [x, y] = edges[i]
    matrix[x - 1][y - 1] = 1
    matrix[y - 1][x - 1] = 1
}

function dfs_matrix(x) {
    visited[x] = true
    for (let i = 0; i < n; i++) {
        if (matrix[x][i] === 1 && visited[i] === false) {
            dfs_matrix(i)
        }
    }
}

dfs_matrix(0)
console.log(visited.filter(i => i === true).length - 1)