const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, m] = input[0].split(' ').map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

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


let answer = Array(n).fill(0).map(() => Array(n).fill(0))
let visited = Array(n).fill(0).map(() => Array(n).fill(false))
let step = Array(n).fill(0).map(() => Array(n).fill(-1))

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
            if (isRange(newX, newY) && a[newX][newY] !== 1 && step[newX][newY] === -1) {
                q.push([newX, newY])
                step[newX][newY] = step[x][y] + 1
            }
        }
    }
}



for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] === 3) {
            q.push([i, j])
            step[i][j] = 0
        }
    }
}

bfs()



for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] === 2) {
            answer[i][j] = step[i][j]
        } else {
            answer[i][j] = 0
        }
    }
}

answer.forEach(i => console.log(i.join(" ")))