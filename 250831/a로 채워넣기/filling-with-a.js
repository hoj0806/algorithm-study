const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let str = input

console.log(str.slice(0, 1) + "a" + str.slice(2, - 2) + "a" + str.slice(-1))