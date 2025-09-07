const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function solution(a, b) {
    if(b.length > a.length) {
        return "No"
    }
    for(let i = 0; i < a.length - b.length + 1; i++) {
        let allMatched = true
        for(let j = 0; j < b.length; j++) {
            if(a[i + j] !== b[j]) {
                allMatched = false
                break
            }
        }
        if(allMatched) {
            return "Yes"
        }
    }

    return "No"
}

console.log(solution(a, b))