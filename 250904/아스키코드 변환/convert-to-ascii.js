const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = input

console.log(a.charCodeAt(0), String.fromCharCode(Number(b)))