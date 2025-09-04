const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')


for(let i = 0; i < input.length; i++) {
    let str = input[i]
    if(str === 'END') {
        break
    }
    console.log(str.split("").reverse().join(""))
}