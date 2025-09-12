const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
}

let arr = Array(n).fill(0).map(() => Array(m).fill(0))

let x = 0, y = 0

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]
let dirNum = 1

arr[0][0] = 1

for(let i = 2; i <= n * m; i++) {
    let rx = x + dx[dirNum]
    let ry = y + dy[dirNum]

    if(!isRange(rx, ry) || arr[rx][ry] !== 0) {
        dirNum = (dirNum + 3) % 4
    }
    x += dx[dirNum]
    y += dy[dirNum]


    arr[x][y] = i
}

arr.forEach((i) => {
    console.log(i.join(" "))
})