const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));
let cnt = 0
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

    empty() {
        return this.head === this.tail
    }
}
let visited = Array(n).fill(false).map(() => Array(n).fill(false))

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n
}

function canGo(x, y) {
    if(!isRange(x, y)) {
        return false
    }

    if(grid[x][y] === 1 || visited[x][y]) {
        return false
    }

    return true
}

let q = new Queue()

for(let i = 0; i < startPoints.length; i++) {
    let [x, y] = startPoints[i]
    q.push([x-1, y-1])
    visited[x-1][y-1] = true
}

function bfs() {
    let dx = [0, 1, 0 , -1]
    let dy = [1, 0, -1, 0]
    while(!q.empty()) {
        let [x, y] = q.pop()
        cnt+=1
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
bfs()
console.log(cnt)