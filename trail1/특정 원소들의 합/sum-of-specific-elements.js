const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let m = f

let sum = 0
for(let i = 0; i < m.length; i++) {
    let row = m[i].split(" ").map(Number)

    for(let j = 0; j <= i; j++) {
        sum+=row[j]
    }
}

console.log(sum)