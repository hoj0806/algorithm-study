const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.

let answer = 0
function solution(row, col, cnt) {
    let str = grid[row][col]

    for (let i = row + 1; i < R; i++) {
        for (let j = col + 1; j < C; j++) {
            if (grid[i][j] !== str) {
                solution(i, j, cnt + 1)
            }
        }
    }

    if (row === R - 1 && col === C - 1) {
        if (cnt === 3) answer++
    }
}

solution(0, 0, 0)

console.log(answer)

