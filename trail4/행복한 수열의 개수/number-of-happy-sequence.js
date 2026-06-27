const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.



let answer = 0

function getRow(grid, idx) {
    return grid[idx]
}

function getCol(grid, idx, length) {
    let arr = []
    for(let i = 0; i < length; i++) {
        arr.push(grid[i][idx])
    }

    return arr
}

function check(arr, k) {
    let max = 1
    let cnt = 1
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]) {
            cnt++
            max = Math.max(max, cnt)
        } else {
            max = Math.max(max, cnt)
            cnt = 1
        }
    }
    return max >= k 
}

for(let i = 0; i < n; i++) {
    let row = getRow(grid, i)
    let col = getCol(grid, i, n)


    if(check(row, m)) answer++
    if(check(col, m)) answer++
}

console.log(answer)

