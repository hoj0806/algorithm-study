const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.


const visited = Array(n).fill(0).map(() => Array(m).fill(false))
const step = Array(n).fill(0).map(() => Array(m).fill(0))


let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}

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

const q = new Queue()

function bfs() {
    while (!q.empty()) {
        let curr = q.pop()
        let [x, y] = curr
        for (let i = 0; i < dx.length; i++) {
            let newX = x + dx[i]
            let newY = y + dy[i]
            if (isRange(newX, newY) && grid[newX][newY] === 1 && !visited[newX][newY]) {
                visited[newX][newY] = true
                step[newX][newY] = step[x][y] + 1
                q.push([newX, newY])
            }
        }
    }
}


q.push([0, 0])
visited[0][0] = true
bfs()


console.log(visited[n - 1][m - 1] ? step[n - 1][m - 1] : -1)