const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.


let number = 1
while (true) {
    let copy = number
    let pass = true

    for (let i = 0; i < conditions.length; i++) {

        let [x, y] = conditions[i]
        copy *= 2
        if (copy < x || copy > y) {
            pass = false
            break
        }



    }
    if (pass) {
        console.log(number)
        return
    }

    number++
}