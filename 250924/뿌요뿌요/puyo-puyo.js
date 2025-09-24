const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));
// Please write your code here.


let breakCount = 0
let max = 0

for(let i = 1; i <= 4; i++) {
    function isRange(x, y) {
        return 0 <= x && x < n && 0 <= y && y < n
    }

    function canGo(x, y, z) {
        if(!isRange(x, y)) {
            return false
        }
    
        if(visited[x][y] || grid[x][y] !== z) {
            return false
        }
    
        return true
    }

    function dfs(x, y, z) {
        let dx = [0, 1, 0 ,-1]
        let dy = [1, 0, -1 ,0]
        let k = 1
        visited[x][y] = true
        
        for(let p = 0; p < dx.length; p++) {
            let newX = x + dx[p]
            let newY = y + dy[p]
    
            if(canGo(newX, newY, z)) {
                visited[newX][newY] = true
                k+=dfs(newX, newY, z)
                
            }
        }
        return k
    }


    let visited = Array(n).fill(false).map(() => Array(n).fill(false))
    
    for(let j = 0; j < n; j++) {
        for(let k = 0; k < n; k++) {
            if(!visited[j][k] && grid[j][k] === i) {
                let size =  dfs(j, k, i)
                  if(size >= 4) {
                        breakCount+=1
                    }
                  max = Math.max(max, size)
            }
        }
       
    }
     
   
}

console.log(breakCount, max)
