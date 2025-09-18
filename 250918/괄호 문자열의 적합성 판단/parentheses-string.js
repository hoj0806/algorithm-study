const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.

let stack = []

for(let i = 0; i < bracketStr.length; i++) {
    let b = bracketStr[i]

    if(b === "(") {
        stack.push(b)
    } else {
        if(stack.length === 0) {
            console.log("No")
            break
        } else {
            stack.pop()
        }
    }
    if(i === bracketStr.length - 1) {
        console.log(stack.length === 0 ? "Yes" : "No")
    }
}