const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let k = 1; k <= 2; k++) {
    for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        str+='*'
    }
    
    console.log(str)

    
}
console.log()
}
