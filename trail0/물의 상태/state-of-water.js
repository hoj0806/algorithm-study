const fs = require('fs')
const t = Number(fs.readFileSync(0).toString().trim())

if(t < 0) {
    console.log("ice")
} else if(t >= 100) {
    console.log("vapor")
} else {
    console.log('water')
}