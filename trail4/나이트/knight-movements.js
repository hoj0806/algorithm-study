const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [r1, c1, r2, c2] = input[1].split(' ').map(v => Number(v) - 1);

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

const visited = Array(n).fill(0).map(() => Array(n).fill(false))
const step = Array(n).fill(0).map(() => Array(n).fill(0))

let dx = [-2, -1, 1, 2, 2, 1, -1, -2]
let dy = [1, 2, 2, 1, -1, -2, -2, -1]

let q = new Queue()

function isRange(a, b) {
    return a >= 0 && a < n && b >= 0 && b < n
}

function bfs() {
    while (!q.empty()) {
        let curr = q.pop()
        let [x, y] = curr

        for (let i = 0; i < dx.length; i++) {
            let newX = x + dx[i]
            let newY = y + dy[i]
            if (isRange(newX, newY) && !visited[newX][newY]) {
                visited[newX][newY] = true
                step[newX][newY] = step[x][y] + 1
                q.push([newX, newY])
            }
        }
    }
}

q.push([r1, c1])
visited[r1][c1] = true
bfs()
console.log(visited[r2][c2] ? step[r2][c2] : -1)
