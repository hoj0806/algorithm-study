const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const edges = input.slice(1, m + 1).map(line => line.split(" ").map(Number));

// Please Write your code here.

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))
let visited = Array(n).fill(false)
let dist = Array(n).fill(Infinity)
for (let i = 0; i < m; i++) {
    let [x, y, z] = edges[i]
    matrix[x - 1][y - 1] = z
}



const startNode = 0;
dist[startNode] = 0;

for (let i = 0; i < n; i++) {
    let min_index = -1;
    let min_value = Infinity;

    for (let j = 0; j < n; j++) {
        if (!visited[j] && dist[j] < min_value) {
            min_value = dist[j];
            min_index = j;
        }
    }

    if (min_index === -1) break;

    // 2. 방문 처리
    visited[min_index] = true;

    for (let j = 0; j < n; j++) {
        // 간선이 존재하고(!= 0), 아직 방문하지 않은 노드인 경우
        if (matrix[min_index][j] !== 0 && !visited[j]) {
            let cost = dist[min_index] + matrix[min_index][j];
            if (cost < dist[j]) {
                dist[j] = cost;
            }
        }
    }
}


dist.slice(1).forEach(i => console.log(i === Infinity ? -1 : i))