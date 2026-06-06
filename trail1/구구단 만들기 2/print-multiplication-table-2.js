const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f


for (let i = 2; i <= 8; i += 2) {
    let str = ''

    for(let j = b; j >= a; j--) {
        str += `${j} * ${i} = ${i * j}`

        if(j !== a) {
            str += " / "
        }
    }

    console.log(str)
}