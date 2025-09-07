const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n + 1 - i; j++) {
        if(j === n + 1 - i) {
             str += `${i} * ${j} = ${i * j}`
        } else {
             str += `${i} * ${j} = ${i * j} / `
        }
    }
    console.log(str)
}