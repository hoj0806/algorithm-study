const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

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
        return this.tail === this.head
    }
}

let visited = Array(n).fill(false).map(() => Array(n).fill(false))
let step = Array(n).fill(0).map(() => Array(n).fill(0))
let answer = Array(n).fill(0).map(() => Array(n).fill(0))

let q = new Queue()

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 2) {
            q.push([i, j])
            visited[i][j] = true
        }
    }
}

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]


function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

function BFS() {
    while (!q.empty()) {
        let currV = q.pop()
        let [x, y] = currV

        for (let i = 0; i < dx.length; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (isRange(nx, ny) && !visited[nx][ny] && grid[nx][ny] !== 0) {
                q.push([nx, ny])
                visited[nx][ny] = true
                step[nx][ny] = step[x][y] + 1
            }

        }
    }
}

BFS()

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) {
            answer[i][j] = -1
        } else {
            if (!visited[i][j]) answer[i][j] = -2
            else answer[i][j] = step[i][j]
        }
    }
}

answer.forEach(row => console.log(row.join(" ")))