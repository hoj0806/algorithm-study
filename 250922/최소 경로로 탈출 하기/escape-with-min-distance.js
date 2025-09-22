const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

class Queue {
    constructor() {
        this.q = []
        this.head = -1
        this.tail = -1 
    }

    push(item) {
        this.q.push(item)
        this.tail++
    }

    pop() {
        return this.q[++this.head]
    }

    empty() {
        return this.head === this.tail
    }
}

let step = Array(n).fill(0).map(() => Array(m).fill(0));
let visited = Array(n).fill(false).map(() => Array(m).fill(false));
let q = new Queue();

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

function canGo(x, y) {
    return isRange(x, y) && !visited[x][y] && grid[x][y] === 1;
}

function go(x, y, z) {
    step[x][y] = z;
    visited[x][y] = true;
    q.push([x, y, z]); 
}

function bfs() {
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    while(!q.empty()) {
        let [x, y, z] = q.pop();
        for(let i = 0; i < 4; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];
            if(canGo(newX, newY)) {
                go(newX, newY, z + 1); // step 값을 올려서 큐에 넣기
            }
        }
    }
}

go(0, 0, 0);
bfs();

console.log(step[n-1][m-1] === 0 ? -1 : step[n-1][m-1]);
