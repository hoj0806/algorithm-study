const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

function solution(a, b) {
    for (let i = 0; i < n1 - n2 + 1; i++) {
        let slice = a.slice(i, i + n2)
        if (slice.join("") === b.join("")) return "Yes"
    }
    return "No"
}

console.log(solution(a, b))