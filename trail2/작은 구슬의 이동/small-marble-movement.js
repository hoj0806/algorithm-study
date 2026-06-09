const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.

let second = 0

let dx = [0, 1, -1, 0]
let dy = [1, 0, 0, -1]

let x = r - 1
let y = c - 1

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}


const mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3,
}

let dirNum = mapper[d]
while (true) {
    if (second === t) {
        break
    }

    let nextX = x + dx[dirNum]
    let nextY = y + dy[dirNum]

    if (isRange(nextX, nextY)) {
        x = nextX
        y =nextY
    } else {
        dirNum = 3 - dirNum
    }

        second++
}

console.log(x + 1, y + 1)

