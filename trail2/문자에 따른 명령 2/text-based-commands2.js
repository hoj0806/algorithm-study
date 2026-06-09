const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.

let x = 0
let y = 0

let dirNum = 3
let dx = [1, 0, -1, 0]
let dy = [0, -1, 0, 1]


for (let i = 0; i < commands.length; i++) {
  let c = commands[i]
  if (c === 'R') {
    dirNum = (dirNum + 1) % 4
  } else if (c === 'L') {
    dirNum = (dirNum - 1 + 4) % 4
  } else if (c === 'F') {
    x += dx[dirNum]
    y += dy[dirNum]
  }
}

console.log(x, y)