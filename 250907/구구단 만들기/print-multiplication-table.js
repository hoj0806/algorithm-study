const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

for(let i = 1; i <= 9; i++) {
    let str = ''
    for(let j = b; j >= a; j-=2) {
        str += `${j} * ${i} = ${j * i}`
        if(j !== a) {
            str += " / "
        }
    }
    console.log(str)
}