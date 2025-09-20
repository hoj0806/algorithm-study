const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let x = [m1 ,d1]
let y = [m2, d2]

let future = []
let past = []
let reverse = false
if(m1 > m2) {
    reverse = true
    future = [m1, d1]
    past = [m2, d2]
} else if(m1 === m2) {
    if(d1 > d2) {
    reverse = true

        future = [m1, d1]
        past = [m2, d2]
    } else {
        future = [m2, d2]
        past = [m1, d1]
    }
} else {
    future = [m2, d2]
    past = [m1, d1]
}

let cnt = 0
while(true) {
    if(future[0] === past[0] && future[1] === past[1]) {
        break
    }

    if(days[past[0]] === past[1]) {
        past[0]+=1
        past[1] = 1
    } else {
        past[1]+=1
    }
    cnt+=1
}

let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
console.log(week[reverse === true ? week.length - (cnt % 7) : cnt % 7])
