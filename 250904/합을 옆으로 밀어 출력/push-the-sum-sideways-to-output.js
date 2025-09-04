const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

let z = 0
for(let i = 1; i <= n; i++) {
    z += Number(input[i])
}

let str = z.toString()

console.log(str.slice(1) + str.slice(0, 1))