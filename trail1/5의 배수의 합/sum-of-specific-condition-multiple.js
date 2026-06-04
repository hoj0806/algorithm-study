const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let sum = 0
if (a >= b) {
    for (let i = b; i <= a; i++) {
        if (i % 5 === 0) sum += i
    }
} else {
    for (let i = a; i <= b; i++) {
        if (i % 5 === 0) sum += i
    }
}

console.log(sum)