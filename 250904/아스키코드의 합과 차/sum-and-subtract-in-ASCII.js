const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input

let x = a.charCodeAt(0) + b.charCodeAt(0)
let y = Math.abs(a.charCodeAt(0) - b.charCodeAt(0))

console.log(x, y)