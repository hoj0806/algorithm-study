const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, currX, currY] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]
let x = currX - 1
let y = currY - 1

let answer = []

function isRange(x, y) {
  return x >= 0 && x < n && y >= 0 && y < n
}

while (true) {
  let moved = false
  let point = grid[x][y]
  answer.push(point)
  for (let i = 0; i < dx.length; i++) {
    let nx = x + dx[i]
    let ny = y + dy[i]
    if (isRange(nx, ny) && grid[nx][ny] > point) {
      x = nx
      y = ny
      moved = true
      break
    }
  }





  if (moved === false) {
    break
  }
}

console.log(answer.join(" "))