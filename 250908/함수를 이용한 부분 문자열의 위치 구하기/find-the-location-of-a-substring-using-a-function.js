const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

function solution() {
    for(let i = 0; i < text.length - pattern.length + 1; i++) {
        let allMatched = true
        for(let j = 0; j < pattern.length; j++) {
            if(text[i + j] !== pattern[j]) {
                allMatched = false
                break
            }
        }
        
        if(allMatched) {
            return i 
            break
        }
    }
    return -1
}

let answer = solution()

console.log(answer)