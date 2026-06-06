const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let code = 65

for (let i = 1; i <= n; i++) {
    let str = ''

    for (let j = 1; j <= n; j++) {
        if (j >= i) {
            str += `${String.fromCharCode(code)} `
            code++
            if (code === 91) {
                code = 65
            }
        } else {
            str += "  "
        }

    }

    console.log(str)

}