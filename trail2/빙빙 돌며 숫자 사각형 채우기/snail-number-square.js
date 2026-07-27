const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.


let matrix = Array(n).fill(0).map(() => Array(m).fill(0))

let num = 1

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let dirNum = 0

let x = 0
let y = 0
matrix[x][y] = num

function isRange(a, b) {
  return a >= 0 && a < n && b >= 0 && b < m
}

while (true) {
  let newX = x + dx[dirNum]
  let newY = y + dy[dirNum]

  if (isRange(newX, newY) && matrix[newX][newY] === 0) {
    x = newX
    y = newY
    num++
    matrix[newX][newY] = num
  } else {
    dirNum = (dirNum + 1) % 4
  }

  if (num >= n * m) {
    break
  }
}

matrix.forEach(r => console.log(r.join(" ")))