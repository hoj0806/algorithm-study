const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = n
for(let i = 1; i <= (2 * n) - 1; i++) {
    let str = ''

    for(let j = 1; j <= cnt; j++) {
        str+= "* "
    }

    console.log(str)

    if(i < n) {
        cnt--
    } else {
        cnt++
    }
}