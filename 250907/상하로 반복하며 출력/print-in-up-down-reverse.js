const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= n; j++) {
        if(j % 2 !== 0) {
            str += i
        } else {
            str += n - i + 1
        }
    }
    console.log(str)
}