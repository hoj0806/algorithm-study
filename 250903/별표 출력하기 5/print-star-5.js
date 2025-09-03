const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = n; i > 0; i--) {
    let str = ''
    for(let j = i; j > 0; j--) {
        str += "*".repeat(i) + " "
    }
    console.log(str)
}