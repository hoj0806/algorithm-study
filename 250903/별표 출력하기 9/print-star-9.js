const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let str = ''

    for(let j = 1; j <= (n - i) * 2; j++) {
        str += " "
    }

    for(let k = 1; k <= (2 * i) - 1; k++) {
        str += "* "
    }

    console.log(str)
}