const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)



for(let i = n; i >= 1; i--) {
    let str = ''

    for(let j = n; j >= 1; j--) {
        str += `(${i},${j}) `
    }

    console.log(str)
}