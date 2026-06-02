const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let count = 0

for(let i = 0; i < f.length; i++) {
    let row = f[i].split(" ").map(Number)
    for(let j = 0; j < row.length; j++) {
        if(row[j] % 5 === 0) {
            count++
        }
    }
}

console.log(count)