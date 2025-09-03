const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0

while(true) {
    let [row, col , str] = input[idx].split(" ")
    idx++
    console.log(Number(row) * Number(col))
    if(str === 'C') {
        break
    }
}