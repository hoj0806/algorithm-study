const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

if(f === "S") {
    console.log("Superior")
} else if(f === "A") {
    console.log("Excellent")
} else if(f === "B") {
    console.log("Good")
} else if(f === "C") {
    console.log("Usually")
} else if(f === "D") {
    console.log("Effort")
} else {
    console.log("Failure")
}