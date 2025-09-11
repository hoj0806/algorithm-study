const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.

let x = 0, y = 0

let dx = [1, 0, -1 , 0]
let dy = [0, -1 , 0 , 1]
let answer = -1
let obj = {
    'E' : 0,
    'S' : 1,
    'W' : 2,
    'N' : 3
}
let second = 0
for(let i = 0; i < moves.length; i++) {
    let [a, b] = moves[i].split(" ")
    let dirNum = obj[a]
   
    for(let j = 1; j <= Number(b); j++) {
          second++
          x += dx[dirNum]
          y += dy[dirNum]

         if(x === 0 && y === 0) {
            answer = second
            break
         }
        
    }
    if(answer !== -1) {
        break
    }
  
}

console.log(answer)