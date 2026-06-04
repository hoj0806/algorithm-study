const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let a = Number(f[0])
let z = f[1].split(" ").map(Number)

let arr = Array(9).fill(0)


for(let i = 0; i < z.length; i++) {
    arr[z[i]-1]++
}

console.log(arr.join('\n'))
