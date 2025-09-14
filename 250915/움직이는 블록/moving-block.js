const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let cnt = 0
while(true) {
    let allSame = true
   let first = blocks[0]
    for(let i = 1; i < blocks.length; i++) {
            if(first !== blocks[i]) {
                allSame = false
                break
            }
    }

    if(allSame === true) {
        break
    }
    let max = Math.max(...blocks)
    let min = Math.min(...blocks)

    let maxIndex = blocks.indexOf(max)
    let minIndex = blocks.indexOf(min)

    blocks[maxIndex]-=1
    blocks[minIndex]+=1
    cnt++
    
}

console.log(cnt)