const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, m] = input[0].split(' ').map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

// 0은 이동할수 있는 칸 1은 벽 2는 사람이 서있는곳 3은 비를 피할수 있는 공간

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


let answer = Array(n).fill(0).map(() => Array(n).fill(0))

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

let visited = Array(n).fill(false).map(() => Array(n).fill(false))
let step = Array(n).fill(0).map(() => Array(n).fill(0))

let q = new Queue()

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] === 3) {
            q.push([i, j])
            visited[i][j] = true
        }
    }
}

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

function BFS() {
    while (!q.empty()) {
        let currV = q.pop()
        let [x, y] = currV

        for (let i = 0; i < dx.length; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (isRange(nx, ny) && !visited[nx][ny] && a[nx][ny] !== 1) {
                step[nx][ny] = step[x][y] + 1
                q.push([nx, ny])
                visited[nx][ny] = true
            }
        }
    }
}

BFS()

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] === 2) {
            if (!visited[i][j]) {
                answer[i][j] = -1
            } else {
                answer[i][j] = step[i][j]
            }
        }

    }
}

answer.forEach(row => console.log(row.join(" ")))