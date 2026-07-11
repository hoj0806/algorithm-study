const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

// Please Write your code here.


function isSubsequence(target, source) {
    let i = 0
    let j = 0

    while (j < source.length) {
        if (target[i] === source[j]) {
            i++
        }

        if (i === target.length) return true
        j++
    }

    return i === target.length
}



console.log(isSubsequence(B, A) ? "Yes" : "No")