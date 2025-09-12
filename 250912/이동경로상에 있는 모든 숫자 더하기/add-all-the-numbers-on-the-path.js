const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.

function isRange(x, y) {
    return x >= 0 && x < n && y >=0 && y < n
}

let x = Math.floor(n / 2), y = Math.floor(n / 2)

let dx = [0, 1, 0, -1] , dy = [1, 0, -1, 0]

let dirNum = 3
let answer = 0

for(let i = 0; i < commands.length; i++) {
    if(i === 0) {
        answer += board[x][y]
    }

    let c = commands[i]

    if(c === 'R') {
        dirNum = (dirNum + 1) % 4
    } else if(c === 'L') {
        dirNum = (dirNum + 3) % 4
    } else if(c === 'F') {
        let rx = x + dx[dirNum]
        let ry = y + dy[dirNum]
        if(isRange(rx, ry)) {
            x += dx[dirNum]
            y += dy[dirNum]
            answer +=board[x][y]
        }
    }
}

console.log(answer)

