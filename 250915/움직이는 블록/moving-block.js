const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let cnt = 0
while(true) {
    let allSame = true
   let min = 0
   let max = 0
    for(let i = 1; i < blocks.length; i++) {
            if(blocks[0] !== blocks[i]) {
                allSame = false
            }
            if(blocks[min] > blocks[i]) {
                min = i
            }

            if(blocks[max] < blocks[i]) {
                max = i
            }
    }

    if(allSame === true) {
        break
    }


    blocks[max]-=1
    blocks[min]+=1
    cnt++
    
}

console.log(cnt)