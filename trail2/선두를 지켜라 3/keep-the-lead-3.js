const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// Please Write your code here.


let arr = Array(3000000).fill(0)
let arr2 = Array(3000000).fill(0)
const len = arr.length

let aT = 0
let aP = 0
let bT = 0
let bP = 0

for (let i = 0; i < n; i++) {
  let [v, t] = A_moves[i]
  for (let j = 1; j <= t; j++) {
    aT += 1
    aP += v
    arr[aT] = aP
  }
}

for (let i = 0; i < m; i++) {
  let [v, t] = B_moves[i]
  for (let j = 1; j <= t; j++) {
    bT += 1
    bP += v
    arr2[bT] = bP
  }
}

let fame = 'none'
let cnt = 0

for (let i = 0; i < len; i++) {
  if (arr[i] !== 0 && arr2[i] !== 0) {
    if (arr[i] > arr2[i]) {
      if (fame !== 'A') {
        fame = 'A'
        cnt++
      }
    } else if (arr2[i] > arr[i]) {
      if (fame !== 'B') {
        fame = 'B'
        cnt++
      }
    } else {
      if (fame !== 'AB') {
        fame = 'AB'
        cnt++

      }
    }
  }
}

console.log(cnt)