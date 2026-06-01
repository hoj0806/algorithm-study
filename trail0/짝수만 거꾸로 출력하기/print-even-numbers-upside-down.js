const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(f[0])
let array = f[1].split(" ").map(Number)

let result = ''
for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] % 2 === 0) {
        result += array[i] + " "
    }
}

console.log(result)