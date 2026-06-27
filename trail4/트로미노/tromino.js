const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let max = - 1


function findMax(n) {
    max = Math.max(max, n)
}

function block1(grid) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = 0; j <= m - 2; j++) {

            let a = 0
            let b = 0
            let c = 0
            let d = 0

            for (let p1 = 0; p1 <= 1; p1++) {
                for (let q1 = 0; q1 <= 1; q1++) {
                    if (!(p1 === 0 && q1 === 0)) a += grid[i + p1][j + q1]
                    if (!(p1 === 0 && q1 === 1)) b += grid[i + p1][j + q1]
                    if (!(p1 === 1 && q1 === 0)) c += grid[i + p1][j + q1]
                    if (!(p1 === 1 && q1 === 1)) d += grid[i + p1][j + q1]

                }
            }
            findMax(a)
            findMax(b)
            findMax(c)
            findMax(d)        
        }
    }
}

function block2(grid) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= m - 3; j++) {
            let n = 0
            for (let q = j; q < j + 3; q++) {
                n += grid[i][q]
            }
            findMax(n)
        }
    }
}

function block3(grid) {
    for (let i = 0; i <= n - 3; i++) {
        for (let j = 0; j < m; j++) {
            let n = 0

            for (let z = 0; z < 3; z++) {
                n += grid[i + z][j]
            }
            findMax(n)

        }
    }
}

block1(grid)
block2(grid)
block3(grid)

console.log(max)