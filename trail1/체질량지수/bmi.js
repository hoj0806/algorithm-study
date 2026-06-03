const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [h, w] = f

let o = (10000 * w) / (h * h)

console.log(parseInt(o))
if(o >= 25) {
    console.log('Obesity')
}