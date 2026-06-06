const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let matrix = f.split("\n").map(i => i.split(" ").map(Number))

let rowSum = 0
let colSum = 0
let allSum = 0

let a = []
let b = []
let c = []

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
        allSum += matrix[i][j]
        rowSum += matrix[i][j]
    }


    a.push((rowSum / matrix[i].length).toFixed(1))

    rowSum = 0
}

for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        colSum += matrix[j][i]
    }
    b.push((colSum / matrix.length).toFixed(1))

    colSum = 0
}



c.push((allSum / 8).toFixed(1))

console.log(a.join(" "))
console.log(b.join(" "))
console.log(c.join(" "))