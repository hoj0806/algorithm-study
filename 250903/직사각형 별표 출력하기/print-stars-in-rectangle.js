const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [n, m] = input


for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= m; j++) {
        str += "* "
    }
    console.log(str)
}
