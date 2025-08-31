const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let a = input[0].split(" ").map((score) => Number(score))
let b = input[1].split(" ").map((score) => Number(score))

let [mathA, englishA] = a
let [mathB, englishB] = b

if(mathA > mathB && englishA > englishB) {
    console.log(1)
} else {
    console.log(0)
}
