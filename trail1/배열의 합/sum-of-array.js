const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let matrix = f

for (let i = 0; i < matrix.length; i++) {
    let sum = 0
    let row = matrix[i].split(" ").map(Number)
    
    for (let j = 0; j < row.length; j++) {
        sum += row[j]
    }
    console.log(sum)
}

