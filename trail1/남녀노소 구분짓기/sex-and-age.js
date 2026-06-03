const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let [gender, age] = f

if(gender === 0) {
    if(age >= 19) {
        console.log("MAN")
    } else {
        console.log('BOY')
    }
} else {
    if(age >= 19) {
        console.log("WOMAN")
    } else {
        console.log("GIRL")
    }
}

