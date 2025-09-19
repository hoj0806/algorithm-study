const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')



let matrix = input.map((i) => i.split(" ").map(Number))


let row = []
let col = []
let all = []

let allSum = 0
for(let i = 0; i < matrix.length; i++) {
    let rowSum = 0

    for(let j = 0; j < matrix[i].length; j++) {
        rowSum += matrix[i][j]
        allSum += matrix[i][j]
    }
    let rowAverage = (rowSum / matrix[i].length).toFixed(1)
    row.push(rowAverage)

    if(i === matrix.length - 1) {
        let allAverage = allSum / (matrix.length * matrix[i].length)
        all.push(allAverage.toFixed(1))
    }
}

for(let i = 0; i < matrix[0].length; i++) {
   
   let colSum = 0
    for(let j = 0; j < matrix.length; j++) {
     colSum += matrix[j][i]
    }
  
    let colAverage = colSum / matrix.length
    col.push(colAverage.toFixed(1))
  
}

console.log(row.join(" "))
console.log(col.join(" "))
console.log(all.join(" "))