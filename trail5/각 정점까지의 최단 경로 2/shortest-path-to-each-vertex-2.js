const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = input.slice(1, m + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let dist = Array(n + 1).fill(Infinity).map(() => Array(n + 1).fill(Infinity))


for (let i = 1; i <= n; i++) {
    dist[i][i] = 0
}

for (let i = 0; i < m; i++) {
    let [x, y, z] = edges[i]
    dist[x][y] = Math.min(dist[x][y], z)
}


for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
        }
    }
}



for(let i = 1; i <= n; i++) {
    console.log(dist[i].slice(1).map(i => i === Infinity ? - 1 : i).join(" "))
}