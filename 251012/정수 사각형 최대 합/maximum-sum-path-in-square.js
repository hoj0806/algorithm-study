const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))


for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
        
        if(i === 0 && j === 0) {
            matrix[i][j] = num[i][j]
        } else if(i === 0) {
            matrix[i][j] = matrix[i][j-1] + num[i][j]  
        } else if(j === 0) {
            matrix[i][j] = matrix[i-1][j] + num[i][j] 
        } else {
            matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]) + num[i][j]
        }
    }
}

console.log(matrix[n-1][n-1])