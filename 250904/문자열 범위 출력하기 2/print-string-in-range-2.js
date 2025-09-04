const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


let str = input[0]
let n = Number(input[1])

console.log(str.slice(-(n)).split("").reverse().join(""))