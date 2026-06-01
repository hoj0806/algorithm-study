const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let s = []
    for(let j = 1; j <= n; j++) {
        s.push(`${i} * ${j} = ${i*j}`)
    }
    console.log(s.join(", "))
}