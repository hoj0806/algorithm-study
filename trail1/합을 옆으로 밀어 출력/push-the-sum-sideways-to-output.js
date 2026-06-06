const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let n = Number(f[0])

let sum = 0


for (let i = 1; i <= n; i++) {
    sum += Number(f[i])
}
let str = sum.toString()
console.log(str.slice(1, sum.length) + str[0])

// console.log(sum.toString().slice(1, sum.length - 1))
