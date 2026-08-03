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

let visited = Array(n).fill(false).map(() => Array(n).fill(false))
let step = Array(n).fill(0).map(() => Array(n).fill(0))

let q = new Queue()



let dx = [-2, -1, 1, 2, 2, 1, -1, -2]
let dy = [1, 2, 2, 1, -1, -2, -2, -1]

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
            if (isRange(nx, ny) && !visited[nx][ny]) {
                q.push([nx, ny])
                visited[nx][ny] = true
                step[nx][ny] = step[x][y] + 1
            }
        }
    }
}

q.push([r1, c1])
visited[r1][c1] = true
BFS()
console.log(visited[r2][c2] ? step[r2][c2] : -1)