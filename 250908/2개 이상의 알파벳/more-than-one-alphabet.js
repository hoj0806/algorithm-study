const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function solution(str) {
    let b = false
    let s = str[0]
    for(let i = 1; i < str.length; i++) {
        if(s !== str[i]) {
            b = true
            break
        }
    }

    if(b) {
        console.log("Yes")
    } else {
        console.log('No')
    }
}

solution(A)