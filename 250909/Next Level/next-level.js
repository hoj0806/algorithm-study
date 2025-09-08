const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.

class User {
    constructor(id = "codetree", level = 10) {
        this.id = id
        this.level = level
    }
}


let user1 = new User()

console.log(`user ${user1.id} lv ${user1.level}`)
user1.id = user_id
user1.level = level
console.log(`user ${user1.id} lv ${user1.level}`)
