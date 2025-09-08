const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Secret {
    constructor(code, point, time) {
        this.code = code
        this.point = point
        this.time = time
    }
}

let secret = new Secret(s_code, m_point, time)

console.log("secret code : " + secret.code)
console.log("meeting point : " + secret.point)
console.log("time : " + secret.time)
