const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let [r1, c1, r2, c2] = input[1].split(" ").map(i => Number(i) -1)
let visited = Array(n).fill(false).map(() => Array(n).fill(false))
let grid = Array(n).fill(0).map(() => Array(n).fill(0))

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n
}

function canGo(x, y) {
    if(!isRange(x, y) || visited[x][y]) {
        return false
    }

    return true
}

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

let q = new Queue() 

function bfs(x, y, z) {
    let dx = [-2, -1, 1 ,2 ,2, 1 , -1, -2] 
    let dy = [1, 2, 2, 1, -1, -2, -2, -1]
    q.push([x, y, z])
    visited[x][y] = true

    while(!q.empty()) {
        let v = q.pop()
       
        let [a, b, c] = v
        for(let i = 0; i < dx.length; i++) {
            let newX = a + dx[i]
            let newY = b + dy[i]
            if(canGo(newX, newY)) {
                q.push([newX, newY, c + 1])
                visited[newX][newY] = true
                grid[newX][newY] = c + 1
            }
        }
    }
    
}

bfs(r1, c1, 0)

console.log(grid[r2][c2] === 0 ? -1 : grid[r2][c2])