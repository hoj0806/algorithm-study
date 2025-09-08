const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.

class Bomb {
    constructor(code, color, bTime) {
        this.code = code
        this.color = color
        this.bTime= bTime
    }
}


let bomb = new Bomb(u_code, l_color, time)

console.log(`code : ${bomb.code}`)
console.log(`color : ${bomb.color}`)
console.log(`second : ${bomb.bTime}`)
