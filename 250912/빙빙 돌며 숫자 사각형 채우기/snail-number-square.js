const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.


let dx = [0, 1 , 0, -1]
let dy = [1, 0, -1 , 0]
let dirNum = 0
function isRange(x, y) {
    return x >=0 && x < n && y >= 0 && y < m
}


let arr = Array(n).fill(0).map(() => Array(m).fill(0))

let x = 0, y = 0
arr[x][y] = 1

for(let i = 2; i <= n * m; i++) {
    let nx = x + dx[dirNum]
    let ny = y + dy[dirNum]

    if(!isRange(nx, ny) || arr[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4
    }
    x += dx[dirNum]
    y += dy[dirNum]
    
    arr[x][y] = i
}

arr.forEach((r) => {
   console.log(r.join(" "))
})