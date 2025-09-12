const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

function isRange(a, b) {
    return a >= 0 && a < n && b >= 0 && b < n
}

let arr = Array(n).fill(0).map(() => Array(n).fill(0))


arr[n-1][n-1] = n * n

let x = n - 1, y = n - 1

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let dirNum = 2

for(let i = (n *n) - 1; i >= 1; i--) {
    let rx = x + dx[dirNum]
    let ry = y + dy[dirNum]

    if(!isRange(rx, ry) || arr[rx][ry] !== 0) {
        dirNum = (dirNum + 1) % 4
    }

    x += dx[dirNum]
    y += dy[dirNum]

    arr[x][y] = i
}

arr.forEach((i) => {
    console.log(i.join(" "))
})