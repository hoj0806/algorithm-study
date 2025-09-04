const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input


for(let i = 0; i < str.length; i++) {
    let s = str[i]

    if(s === "e") {
        str = str.slice(0, i) + str.slice(i + 1)
        break
    }
}

console.log(str)