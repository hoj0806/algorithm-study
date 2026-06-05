const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let n = Number(f[0])

let sum = 0
let cnt = 0
for(let i = 1; i <= n; i++) {
    if(f[i][0] === "a") cnt++
    sum+=f[i].length
}

console.log(sum, cnt)