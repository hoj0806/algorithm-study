const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

let x = n - 1
let y = n - 1

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let dirNum = 2

let number = n * n

matrix[x][y] = number


function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n
}

for (let i = 2; i <= n * n; i++) {
    number--

    let nx = x + dx[dirNum]
    let ny = y + dy[dirNum]

    if (!isRange(nx, ny) || matrix[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4
        nx = x + dx[dirNum]
        ny = y + dy[dirNum]
    }

    x = nx
    y = ny
    matrix[x][y] = number
}


for(let i=  0; i < n; i++) {
    console.log(matrix[i].join(" "))
}