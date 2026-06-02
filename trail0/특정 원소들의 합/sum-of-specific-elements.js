const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let sum = 0

for(let i = 0; i < f.length; i++) {
    let row = f[i].split(" ").map(Number)
    for(let j = 0; j < row.length; j++) {
       if(i >= j) {
         sum+=row[j]
       }
    }
}

console.log(sum)