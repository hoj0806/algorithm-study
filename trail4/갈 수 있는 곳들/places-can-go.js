const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

class Queue {
    constructor() {
        this.q = []
        this.tail = -1
        this.head = -1
    }

    push(item) {
        this.q.push(item)
        this.tail++
    }

    pop() {
        return this.q[++this.head]
    }

    size() {
        return this.tail - this.head
    }

    empty() {
        return this.size() === 0
    }
}

let q = new Queue()


function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let visited = Array(n).fill(false).map(() => Array(n).fill(false))

for (let i = 0; i < k; i++) {
    let [x, y] = startPoints[i]
    q.push([x - 1, y - 1])
}

function BFS() {
    while (!q.empty()) {
        let currV = q.pop()
        let [x, y] = currV
        visited[x][y] = true
        for (let i = 0; i < dx.length; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (isRange(nx, ny) && !visited[nx][ny] && grid[nx][ny] === 0) {
                q.push([nx, ny])
                visited[nx][ny] = true;
            }
        }
    }
}

BFS()

let cnt = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (visited[i][j]) cnt++
    }
}

console.log(cnt)