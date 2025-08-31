const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let score = Number(input)

let answer = ''
for(let i = score; i <= 100; i++) {
    if(i >= 90) {
       answer += "A" + " "
    } else if(i >= 80) {
       answer += "B" + " "
    } else if(i >= 70) {
        answer += "C" + " "
    } else if(i >= 60) {
        answer += "D" + " "
    } else {
        answer += "F" + " "
    }
}