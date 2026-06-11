const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

let matrix = Array(n).fill(0).map(() => Array(m).fill(0))

let x = 0
let y = 0
let code = 65
matrix[x][y] = String.fromCharCode(code)

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let dirNum = 0

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m
}



for (let i = 2; i <= n * m; i++) {
    code++
    let nx = x + dx[dirNum]
    let ny = y + dy[dirNum]

    if (!isRange(nx, ny) || matrix[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4
        nx = x + dx[dirNum]
        ny = y + dy[dirNum]
    }

    x = nx
    y = ny

    matrix[x][y] = String.fromCharCode(code)

    if (code === 90) code = 64
}


for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "))
}