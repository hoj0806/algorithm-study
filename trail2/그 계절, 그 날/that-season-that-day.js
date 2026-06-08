const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

let arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let yArr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function isLeapYear(n) {
    if (n % 4 !== 0) return false

    if (n % 100 !== 0) return true

    if (n % 400 === 0) return true

    return false
}
function printVacation(n) {
    if (3 <= n && n <= 5) {
        return "Spring"
    } else if (6 <= n && n <= 8) {
        return "Summer"
    } else if (9 <= n && n <= 11) {
        return "Fall"
    } else {
        return "Winter"
    }
}

function solution(n, m, d) {
    if (isLeapYear(n)) {
        if (d > yArr[m]) {
            return -1
        }
    } else {
        if (d > arr[m]) {
            return -1
        }
    }

    return printVacation(m)
}

console.log(solution(year, month, day))