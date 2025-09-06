const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = n; i >= 1; i--) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        str += n - (j-1) + " "
    }

    console.log(str)
}