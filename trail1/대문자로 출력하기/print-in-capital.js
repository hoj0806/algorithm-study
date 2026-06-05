const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let result = ''


for(let ele of f) {
    if(("a" <= ele && ele <= "z") 
    || ("A" <= ele && ele <= 'Z')
    ) {
        result += ele.toUpperCase()
    }
}

console.log(result)