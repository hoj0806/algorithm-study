const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [x, y] = f

let a = ''
let b = ''


for (let i = 0; i < x.length; i++) {
    if (0 <= x[i] && x[i] <= 9) {
        a += x[i]
    } else {
        break
    }
}

for (let i = 0; i < y.length; i++) {
    if (0 <= y[i] && y[i] <= 9) {
        b += y[i]
    } else {
        break
    }
}

console.log(Number(a) + Number(b))