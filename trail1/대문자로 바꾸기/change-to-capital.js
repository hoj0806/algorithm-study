const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let m = f

for (let i = 0; i < m.length; i++) {
    let row = m[i].split(" ")
    let k = ''

    for (let j = 0; j < row.length; j++) {
        k += row[j].toUpperCase() + " "
    }

    console.log(k)

}

