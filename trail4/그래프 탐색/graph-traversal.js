const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(' ').map(Number));
}

// Please Write your code here.




let cnt = 0
let visited = Array(n + 1).fill(false)
let graph = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0))

for (let i = 0; i < edges.length; i++) {
    let [x, y] = edges[i]
    graph[x][y] = 1
    graph[y][x] = 1
}



function dfs_array(vertex) {
    for (let currV = 1; currV <= n; currV++) {
        if (graph[vertex][currV] === 1 && !visited[currV]) {
            cnt++
            visited[currV] = true
            dfs_array(currV)
        }
    }

}

visited[1] = true
dfs_array(1)

console.log(cnt)