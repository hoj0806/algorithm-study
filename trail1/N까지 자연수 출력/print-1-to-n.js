const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let result = ''
let n = 1;

while(n <= Number(f)) {
    result += n + " "

    n++
}

console.log(result)