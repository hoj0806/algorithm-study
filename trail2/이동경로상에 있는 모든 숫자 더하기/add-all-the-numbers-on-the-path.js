const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.


let x = (n - 1) / 2
let y = (n - 1) / 2

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let sum = board[x][y]
let dirNum = 3


function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n
}

for (let i = 0; i < commands.length; i++) {
    let c = commands[i]

    let nx = x + dx[dirNum]
    let ny = y + dy[dirNum]

    if (c === 'F') {
        if (isRange(nx, ny)) {
            x = nx
            y = ny
            sum += board[x][y]
        }

    } else if (c === 'R') {
        dirNum = (dirNum + 1) % 4
    } else if (c === 'L') {
        dirNum = (dirNum - 1 + 4) % 4
    }
}

console.log(sum)
