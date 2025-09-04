const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let str = input

console.log(str)

for(let i = 0; i < str.length; i++) {
    str = str.slice(-1) + str.slice(0, -1)
    console.log(str)
}