const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let number = 11 + (2 * (i -1))
    let str = ''
    for(let j = 1; j <= n; j++) {
        if(j !== 1) {
            number += 2
        }
        str += number + " "
    }
    console.log(str)
}