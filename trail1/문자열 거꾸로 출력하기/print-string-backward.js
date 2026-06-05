const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


for(let ele of f) {
    if(ele === 'END') {
        return
    }

    console.log(ele.split("").reverse().join(""))
}

