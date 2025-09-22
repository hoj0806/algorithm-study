const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [n, m] = input[0].split(" ").map(Number)

let grid = input.slice(1).map(i => i.split(" ").map(Number))


let max = [1, 0];

for(let k = 100; k >= 1; k--) {
    let visited = Array(n).fill(false).map(() => Array(m).fill(false))
    let cnt = 0
    function isRange(x, y) {
        return 0 <= x && x < n && 0 <= y && y < m
    }
    
    function canGo(x, y, k) {
        if(!isRange(x, y)) {
            return false
        }
    
        if(visited[x][y] || grid[x][y] <= k) {
            return false
        }
    
        return true
    }
    
    function dfs(x, y, k) {
        visited[x][y] = true
        let dx = [0, 1, 0 , -1]
        let dy = [1, 0, -1, 0]
      
        
        for(let i = 0; i < dx.length; i++) {
            let newX = x + dx[i]
            let newY = y + dy[i]
            if(canGo(newX, newY, k)) {
                visited[newX][newY] = true
                dfs(newX, newY, k)
            }
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(!visited[i][j] && grid[i][j] > k) {
                dfs(i, j, k)
                cnt+=1
                }
            }
    }
    if(cnt > max[1]) {
        max = [k, cnt]
    } else if(cnt === max[1]) {
        max = [k, cnt]
    }
}

console.log(max[0], max[1])