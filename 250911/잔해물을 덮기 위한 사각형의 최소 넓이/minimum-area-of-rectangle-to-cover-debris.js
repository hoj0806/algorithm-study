const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

const offset = 1000
const maxSize = 2500

let arr = Array(maxSize).fill(0).map(() => Array(maxSize).fill(0))

let [r1x1, r1y1, r1x2, r1y2] = rect1.map((i) => i + offset)
let [r2x1, r2y1, r2x2, r2y2] = rect2.map((i) => i + offset)

for(let i = r1x1; i < r1x2; i++) {
    for(let j = r1y1; j < r1y2; j++) {
       arr[i][j] = 1
    }
}

for(let i = r2x1; i < r2x2; i++) {
    for(let j = r2y1; j < r2y2; j++) {
       arr[i][j] = 0
    }
}
let maxRow = 0
let maxCol = 0
let minRow = 10000
let minCol = 10000
for(let i = 0; i < maxSize; i++) {
    for(let j = 0; j < maxSize; j++) {
        if(arr[i][j] === 1) {
            if(i > maxRow) {
                maxRow = i
            }

            if(i < minRow) {
                minRow = i
            }

            if(j > maxCol) {
                maxCol = j
            }

            if(j < minCol) {
                minCol = j
            }
        }
    }
}

let x = (maxRow - minRow) + 1
let y = (maxCol - minCol) + 1 

console.log(x*y)