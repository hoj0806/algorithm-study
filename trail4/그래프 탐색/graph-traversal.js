const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(' ').map(Number));
}

// Please Write your code here.


const graph = Array.from(Array(n + 1), () => [])
let visited = Array(n + 1).fill(false)

for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i]
    graph[v1].push(v2)
    graph[v2].push(v1)
}


function dfs(vertex) {
    graph[vertex].forEach(currV => {
        if (!visited[currV]) {
            visited[currV] = true
            dfs(currV)
        }
    })
}

visited[1] = true
dfs(1)

let result = visited.filter(v => v === true).length - 1;
console.log(result);