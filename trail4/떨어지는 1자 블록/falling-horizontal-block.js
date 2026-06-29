const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.


let points = []

for (let i = 0; i < m; i++) {
  points.push([0, k + i - 1])
}

function isCanFall(z) {
  return z >= 0 && z < n
}


while (true) {
  let fall = true

  for (let i = 0; i < points.length; i++) {
    let [x, y] = points[i]
    if (!isCanFall(x + 1) || grid[x + 1][y] === 1) {
      fall = false
      break
    }
  }



  if (fall === false) {
    break
  } else {
    points = points.map((i) => {
      let [x, y] = i
      return [x + 1, y]
    })
  }
}

for (let i = 0; i < points.length; i++) {
  let [x, y] = points[i]
  grid[x][y] = 1
}

for (let j = 0; j < grid.length; j++) {
  console.log(grid[j].join(" "))
}