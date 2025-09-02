const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [h, w] = input

let bmi = (10000 * w) / (h * h)

console.log(parseInt(bmi))

if(bmi > 25) {
    console.log('Obesity')
}

