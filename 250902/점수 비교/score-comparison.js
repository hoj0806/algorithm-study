const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let[mathA, englishA] = input[0].split(" ").map(Number)
let[mathB, englishB] = input[1].split(" ").map(Number)

if(mathA > mathB && englishA > englishB) {
    console.log(1)
} else {
    console.log(0)
}



