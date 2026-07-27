const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// Please Write your code here.

function isRange(a, b) {
    return a >= 0 && a < n && b >= 0 && b < n
}

let x = 0
let y = 0
let t = 1


let sX = [0, 1, 0, -1]
let sY = [1, 0, -1, 0]
let sDirNum = 0

while (true) {
    let newX = x + sX[sDirNum]
    let newY = y + sY[sDirNum]

    if (isRange(newX, newY)) {
        x = newX
        y = newY
    } else {
        sDirNum = (sDirNum + 1) % 4
    }
    t++

    if (t >= startNum) break
}



let dx = [1, 0, -1, 0]
let dy = [0, -1, 0, 1]
let dirNum = parseInt(startNum / n)


let cnt = 0

while (true) {
    if (!isRange(x, y)) {
        break
    }

    if (arr[x][y] === "/") {
        if (dirNum === 0) {
            dirNum = 1
        } else if (dirNum === 1) {
            dirNum = 0
        } else if (dirNum === 2) {
            dirNum = 3
        } else {
            dirNum = 2
        }
    } else if (arr[x][y] === "\\") {
        if (dirNum === 0) {
            dirNum = 3
        } else if (dirNum === 1) {
            dirNum = 2
        } else if (dirNum === 2) {
            dirNum = 1
        } else {
            dirNum = 0
        }
    }

    cnt++
    x += dx[dirNum]
    y += dy[dirNum]
}


console.log(cnt)

