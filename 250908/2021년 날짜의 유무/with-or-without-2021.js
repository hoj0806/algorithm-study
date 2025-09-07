const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function solution(month, day) {
    if(month > 12) {
        return "No"
    }
    
    if(month === 2) {
        if(day <= 28) {
            return "Yes"
        } else {
            return "No"
        }
    } else {
        if(month === 4 || month === 6 || month === 9 || month === 11) {
            if(day <= 30) {
                return "Yes"
            } else {
                return "No"
            }
        } else {
            if(day <= 31) {
                return "Yes"
            } else {
                return "No"
            }
        }
    }
}

console.log(solution(m, d))