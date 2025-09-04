const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [str, find] = input

console.log(str.indexOf(find))