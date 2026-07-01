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

let step = Array(n).fill(-1).map(() => Array(n).fill(-1))
let q = new Queue()

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (grid[i][j] === 2) {
            q.push([i, j])
            step[i][j] = 0
        }
    }
}

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
            if (isRange(newX, newY) && step[newX][newY] === -1 && grid[newX][newY] === 1) {
                q.push([newX, newY])
                step[newX][newY] = step[x][y] + 1
            }
        }
    }
}


bfs()

for(let i = 0; i < n; i++) {
    for(let j = 0;  j < n; j++) {
        if(grid[i][j] === 1 && step[i][j] === -1) {
            step[i][j] = -2
        }
    }
}

step.forEach(i => console.log(i.join(" ")))