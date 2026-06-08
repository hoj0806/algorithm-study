const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.


function solution(a, o, b) {
    if (o === "+") {
        return `${a} + ${b} = ${a + b}`
    } else if (o === "-") {
        return `${a} - ${b} = ${a - b}`
    } else if (o === "*") {
        return `${a} * ${b} = ${a * b}`
    } else if (o === "/") {
        return `${a} / ${b} = ${parseInt(a / b)}`
    } else {
        return "False"
    }
}

console.log(solution(a, o, c))