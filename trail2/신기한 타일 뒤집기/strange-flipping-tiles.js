const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.


let arr = Array(500000).fill(0)

let idx = 250000
let blackCnt = 0
let whiteCnt = 0
for (let i = 0; i < n; i++) {
    let [n, c] = commands[i].split(" ")
    n = Number(n)
    if (c === 'R') {
        arr[idx] = 'B'
        for (let i = 1; i < n; i++) {
            idx++
            arr[idx] = 'B'
        }
    } else {
        for (let i = 1; i < n; i++) {
            arr[idx] = 'W'
            idx--
        }
        arr[idx] = 'W'
    }

}


arr.forEach(i => {
    if (i === 'B') {
        blackCnt++
    } else if (i === 'W') {
        whiteCnt++
    }
})

console.log(whiteCnt, blackCnt)