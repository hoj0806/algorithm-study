const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let answer = 0

function isRange(q, w) {
    return 0 <= q && q < n && 0 <= w && w < n
}

for (let i = 0; i < moves.length; i++) {
    let [a, b] = moves[i]
    let x = a - 1
    let y = b - 1

    matrix[x][y] = 1

    let cnt = 0

    for (let j = 0; j < dx.length; j++) {
        let nx = x + dx[j]
        let ny = y + dy[j]
        if (isRange(nx, ny) && matrix[nx][ny] === 1) {
            cnt++
        }
    }

    if (cnt === 3) {
        console.log(1)
    } else {
        console.log(0)
    }
    
}

