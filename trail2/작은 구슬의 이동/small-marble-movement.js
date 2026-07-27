const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.


let dx = [0, 1, -1, 0]
let dy = [1, 0, 0, -1]

const obj = {
  'R': 0,
  'D': 1,
  'U': 2,
  'L': 3
}

let time = 0
let dirNum = obj[d]

let x = r - 1
let y = c - 1

function isRange(x, y) {
  return x >= 0 && x < n && y >= 0 && y < n
}

while (true) {
  if (time === t) break
  let newX = x + dx[dirNum]
  let newY = y + dy[dirNum]
  time++
  if (isRange(newX, newY)) {
    x = newX
    y = newY
  } else {
    dirNum = 3 - dirNum
  }
}

console.log(x + 1, y + 1)


