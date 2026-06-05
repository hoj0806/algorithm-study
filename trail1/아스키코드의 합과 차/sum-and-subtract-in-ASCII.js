const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = f

let x = a.charCodeAt(0)
let y = b.charCodeAt(0)

let sum = x + y
let del;

if (x >= y) {
    del = x - y
} else {
    del = y - x
}

console.log(sum, del)