const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

let graph = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0))

for (let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(" ").map(Number)
    graph[x][y] = 1
    graph[y][x] = 1
}

let visited = Array(n + 1).fill(false)

function dfs(vertex) {
    for(let currV = 1; currV <= n; currV++) {
        if(graph[vertex][currV] && !visited[currV]) {
            visited[currV] = true
            dfs(currV)
        }
    }
}

dfs(1)
visited[1] = false
console.log(visited.filter((i) => i === true).length)