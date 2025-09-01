const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let arr = []
    for(let j = 1; j <= n; j++) {
        arr.push(`${i} * ${j} = ${i * j}`)
    }
    console.log(arr.join(", "))
}