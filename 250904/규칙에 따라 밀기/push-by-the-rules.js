const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0]

let commands = input[1].split("")

for(let i = 0; i < commands.length; i++) {
    let c = commands[i]
    if(c === "L") {
        str = str.slice(1) + str.slice(0, 1)
    } else {
        str = str.slice(-1) + str.slice(0, -1)
    }
}

console.log(str)