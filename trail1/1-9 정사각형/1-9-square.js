const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let z = 1


for (let i = 1; i <= n; i++) {
    let str = ''

    for (let j = 1; j <= n; j++) {
        str += z
        if (z >= 9) {
            z = 1
        } else {
            z++
        }

    }

    console.log(str)


}


