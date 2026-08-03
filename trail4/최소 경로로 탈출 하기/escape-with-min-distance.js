const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

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

    size() {
        return this.tail - this.head
    }

    empty() {
        return this.size() === 0
    }
}

let visited = Array(n).fill(false).map(() => Array(m).fill(false))
let step = Array(n).fill(0).map(() => Array(m).fill(0))

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}


let q = new Queue()
q.push([0, 0])

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function BFS() {
    while (!q.empty()) {
        let currV = q.pop()
        let [x, y] = currV
        let s = step[x][y]
        for (let i = 0; i < dx.length; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (isRange(nx, ny) && !visited[nx][ny] && grid[nx][ny] === 1) {
                q.push([nx, ny])
                step[nx][ny] = s + 1
                visited[nx][ny] = true
            }
        }
    }
}

visited[0][0] = true
BFS()
console.log(visited[n - 1][m - 1] ? step[n - 1][m - 1] : -1)
