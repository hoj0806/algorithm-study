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

    empty() {
        return this.head === this.tail
    }
}

let visited = Array(n).fill(0).map(() => Array(n).fill(false))

let q = new Queue()
let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

function bfs() {
    while (!q.empty()) {
        let curr = q.pop()
        let [x, y] = curr
        for (let i = 0; i < dx.length; i++) {
            let newX = x + dx[i]
            let newY = y + dy[i]
            if (isRange(newX, newY) && grid[newX][newY] === 0 && !visited[newX][newY]) {
                visited[newX][newY] = true
                q.push([newX, newY])
            }
        }
    }
}

for (i = 0; i < startPoints.length; i++) {
    let [a, b] = startPoints[i]
    q.push([a - 1, b - 1])
    visited[a - 1][b - 1] = true
}

bfs()



let cnt = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (visited[i][j]) cnt++
    }
}


console.log(cnt)
