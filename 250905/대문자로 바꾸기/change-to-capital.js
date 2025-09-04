const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

for(let i = 0; i < input.length; i++) {
    let str = ''
    let arr = input[i].split(" ")
    for(let j = 0; j < arr.length; j++) {
        str += arr[j].toUpperCase() + " "
    }
    console.log(str)
}