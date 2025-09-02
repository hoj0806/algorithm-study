const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let answer = ''
if(a < b) {
    answer += '1 '
} else {
    answer += '0 ' 
}

if(a === b) {
    answer += '1 '
} else {
    answer += '0 '
}