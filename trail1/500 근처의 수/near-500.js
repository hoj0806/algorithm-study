const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let max = -1
let min = 1001

for (let i = 0; i < f.length; i++) {
    let m = f[i]

    if (m < 500 && m > max) {
        max = m
    }

    if (m > 500 && m < min) {
        min = m
    }



}


console.log(max, min)