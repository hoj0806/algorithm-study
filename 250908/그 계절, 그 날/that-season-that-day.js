const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.


function checkDate(year, month ,day) {
    if(month === 2) {
        if(checkedYear(year)) {
            if(day > 29) {
                return -1
            } 
        } else {
            if(day > 28) {
                return -1
            }
        }
    } else {
        if(month === 4 || month === 6  || month === 9 || month === 11) {
            if(day > 30) {
                return -1
            }
        }
    }

    return traslateVacation(month)
}
function checkedYear(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0 && year % 400 !== 0) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

function traslateVacation(month) {
    if(month > 11 || month < 3) {
        return "Winter"
    } else if(month <= 5) {
        return "Spring"
    } else if(month <= 8) {
        return "Summer"
    } else if(month <= 11) {
        return "Fall"
    }
}

console.log(checkDate(year, month ,day))