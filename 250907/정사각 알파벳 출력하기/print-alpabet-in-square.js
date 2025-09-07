const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let number = 65
for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        str += String.fromCharCode(number)
        number++
    }
    console.log(str)
}