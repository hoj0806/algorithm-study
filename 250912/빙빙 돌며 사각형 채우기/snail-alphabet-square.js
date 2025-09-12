const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

let arr = Array(n).fill(0).map(() => Array(m).fill(0))

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}
let x = 0, y = 0
let dx = [0, 1 ,0, -1], dy = [1, 0 ,-1, 0]
let dirNum = 0

let z = 65

arr[0][0] = String.fromCharCode(z)

for(let i = 2; i <= n * m; i++) {
    z++
    let rx = x + dx[dirNum]
    let ry = y + dy[dirNum]

    if(!isRange(rx, ry) || arr[rx][ry] !== 0) {
        dirNum = (dirNum + 1) % 4
    }

    x += dx[dirNum]
    y += dy[dirNum]

    arr[x][y] = String.fromCharCode(z)

    if(z === 90) z = 64
}

arr.forEach((i) => {
    console.log(i.join(" "))
})
