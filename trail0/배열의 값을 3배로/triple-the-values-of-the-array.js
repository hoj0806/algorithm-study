const fs = require('fs')
let s = fs.readFileSync(0).toString().trim().split('\n')


let matrix = s.map(row => row.split(" ").map(e => Number(e) * 3))


for(let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "))
}