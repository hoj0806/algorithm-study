const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let a = f[0]
let b = f[1]


let cnt = 0

for(let ele of a) {
    if(ele===b) cnt++
}

console.log(cnt)