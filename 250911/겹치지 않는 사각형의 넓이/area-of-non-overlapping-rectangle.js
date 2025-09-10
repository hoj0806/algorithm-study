const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.


let arr = Array(3000).fill(0).map(() => Array(3000).fill(0))

function addRect(rect) {
    let [x1, y1, x2, y2] = rect.map((i) => i + 1500) 
    for(let i = x1; i <= x2-1; i++) {
        for(let j = y1; j <= y2-1; j++) {
            arr[i][j] = 1
        }
    }
}

function removeRect(rect) {
      let [x1, y1, x2, y2] = rect.map((i) => i + 1500) 
    for(let i = x1; i <= x2-1; i++) {
        for(let j = y1; j <= y2-1; j++) {
            arr[i][j] = 0
        }
    } 
}
addRect(rectA)
addRect(rectB)
removeRect(rectM)

let sum = 0

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[i][j] === 1) {
            sum++
        }
    }
}

console.log(sum)