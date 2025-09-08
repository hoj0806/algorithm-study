const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function solution(str) {
    let bool = true
    for(let i = 0; i < parseInt(str.length / 2); i++) {
        if(str[i] !== str[str.length-i-1]) {
            bool = false
        }
    }

    if(bool) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

solution(str)