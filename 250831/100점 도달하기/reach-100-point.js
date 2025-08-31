const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let score = Number(input)

for(let i = score; i <= 100; i++) {
    if(i >= 90) {
        console.log('A')
    } else if(i >= 80) {
        console.log('B')
    } else if(i >= 70) {
        console.log('C')
    } else if(i >= 60) {
        console.log('D')
    } else {
        console.log('F')
    }
}