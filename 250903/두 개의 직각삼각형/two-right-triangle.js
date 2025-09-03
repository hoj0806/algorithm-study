const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)


for(let i = n; i >= 1; i--) {
    let str = ''
    
    for(let j = i; j >= 1; j--) {
        str += "*"
    }

    for(let k = 1; k <= (2 * (n - i)); k++) {
        str += " "
    }

     for(let j = i; j >= 1; j--) {
        str += "*"
    }
    
    console.log(str)
}