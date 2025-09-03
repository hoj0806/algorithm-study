const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let cnt = (n * 2) - 1
for(let i = 1; i <= (2 * n) - 1; i++) {
    let str = ''

    for(let k = 1; k < (n * 2) - cnt; k++) {
        str += " "
    }

    for(let j = 1; j <= cnt; j++) {
        str += "* "
    }

    console.log(str)

    if(i < n) {
        cnt-=2
    } else {
        cnt+=2
    }
}