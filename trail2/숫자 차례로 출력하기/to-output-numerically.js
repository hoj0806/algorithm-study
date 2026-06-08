const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
let s = 0
let str = ''
let str2 = ''
function solution() {
    if (s >= n) {
        return
    }

    s += 1
    str += s + " "
    solution(s + 1)
}

function solution2(n) {
    if (n === 0) {
        return
    }

    str2 += n + " "
    solution2(n - 1)

}
solution()
solution2(n)

console.log(str)
console.log(str2)

// function solution2(n) {
//     if (n === 0) {
//         return
//     }

//     str2 += n + " "
//     solution(n - 1)
// }

// solution(s)
// solution2(n)

// // console.log(str)
// console.log(str2)
