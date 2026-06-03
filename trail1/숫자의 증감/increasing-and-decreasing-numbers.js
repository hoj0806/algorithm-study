const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [s, n] = f

let result = ''
if (s === 'A') {
    for (let i = 1; i <= Number(n); i++) {
        result += i + " "
    }
} else if(s === "D") {
    for(let i = Number(n); i >= 1; i--) {
        result += i +  " "
    }
}


console.log(result)