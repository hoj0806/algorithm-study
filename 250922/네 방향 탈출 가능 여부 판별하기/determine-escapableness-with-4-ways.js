const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let visited = Array(n).fill(false).map(() => Array(m).fill(false))

class Queue {
    constructor() {
        this.q = []
        this.head = -1
        this.tail = -1
    }

    empty() {
        return this.head === this.tail
    }

    push(item) {
        this.q.push(item)
        this.tail++
    }

    pop() {
        return this.q[++this.head]
    }
}

let q = new Queue()

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m
}

function canGo(x, y) {
    if(!isRange(x, y)) {
        return false
    }

    if(visited[x][y] || grid[x][y] === 0) {
        return false
    }

    return true
}
function bfs() {
    let dx = [0, 1, 0, -1]
    let dy = [1, 0, -1, 0]

    while(!q.empty()) {
        let currV = q.pop()
        let [x, y] = currV
        for(let i = 0; i < dx.length; i++) {
            let newX = x + dx[i]
            let newY = y + dy[i]
                if(canGo(newX, newY)) {
                    visited[newX][newY] = true
            q.push([newX, newY])
        }
    }
    }
  
}

q.push([0, 0])
visited[0][0] = true
bfs()
console.log(+visited[n-1][m-1])