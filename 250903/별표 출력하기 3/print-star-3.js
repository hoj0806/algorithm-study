const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)


for(let i = n; i >= 1; i--) {
    let str = ''

    for(let j = 1; j <= 2 * (n - i); j++) {
        str + "zz"
    }

    // for(let k = 1; k <= (2 * i) - 1; k++) {
    //     str += "* "
    // }

    console.log(str)
   
}