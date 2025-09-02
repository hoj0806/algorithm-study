const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let [str, num] = input

let answer = ''

if(str === 'A') {
    for(let i = 1; i < Number(num); i++) {
        answer += i + " "
    }
} else {
    for(let i = Number(num); i >= 1; i--) {
        answer += i + " "
    }
}

console.log(answer)