const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const k = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));

// Please write your code here.


function solution(grid, r, c) {
    let bombedGrid = bomb(grid, r, c)
    let answer = gravity(bombedGrid)
    return answer
}


function bomb(grid, r, c) {
    r -= 1
    c -= 1

    let range = grid[r][c] - 1

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === r && (j >= c - range && j <= c + range)) {
                grid[i][j] = 0
            } else if ((i >= r - range && i <= r + range) && j === c) {
                grid[i][j] = 0
            }
        }
    }

    return grid
}

function gravity(grid) {
    for (let i = 0; i < grid.length; i++) {
        let temp = []
        for (let j = grid.length - 1; j >= 0; j--) {
            if (grid[j][i] !== 0) {
                temp.push(grid[j][i])
            }
        }
        for (let i = 1; i <= grid.length - temp.length; i++) {
            temp.push(0)
            i--
        }
        for (let j = grid.length - 1; j >= 0; j--) {
            grid[j][i] = temp[grid.length - j - 1]

        }
    }
    return grid
}


function find(grid) {
    let cnt = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if ((grid[i][j] !== 0)) {
                if (grid[i][j] === grid[i][j + 1]) cnt++
            }
        }
    }

    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if ((grid[i][j] !== 0)) {
                if (grid[i][j] === grid[i + 1][j]) cnt++
            }
        }
    }
    return cnt
}

let copy = structuredClone(k);
let max = -1

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let bombedGrid = solution(copy, i + 1, j + 1)
        max = Math.max(max, find(bombedGrid))
        copy = structuredClone(k);
    }
}

console.log(max)
