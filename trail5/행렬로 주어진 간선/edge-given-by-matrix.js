const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const graph = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let answer = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i = 0; i < n; i++) {
    graph[i][i] = 1
}

for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (graph[i][k] === 1 && graph[k][j] === 1) {
                graph[i][j] = 1
            }
        }
    }
}

graph.forEach(row => console.log(row.join(" ")))