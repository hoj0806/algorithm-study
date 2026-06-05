const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let [n, str] = f[0].split(" ")

let cnt = 0
for(let i = 1; i <= Number(n); i++) {
    if(str === f[i]) cnt++
}

console.log(cnt)