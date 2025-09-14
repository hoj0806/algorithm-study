const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please write your code here.

function getMaxLength(arr) {
    let strArr = arr.map(String)
    return strArr.sort((a, b) => b.length - a.length)[0]
}

function radix_sort(arr) {
    let maxLength = getMaxLength(arr)
    for(let pos = 0; pos < maxLength; pos++) {
        let radix_arr = Array(10).fill(0).map(() => [])

        for(let i = 0; i < arr.length; i++) {
            let num = arr[i]
            let digit = Math.floor(num / Math.pow(10, pos)) % 10
            radix_arr[digit].push(num)
        }

        let stored_arr = []
        for(let j = 0; j < 10; j++) {
            for(let k = 0; k < radix_arr[j].length; k++) {
                stored_arr.push(radix_arr[j][k])
            }
        }

        arr = stored_arr
    }
    console.log(arr.join(" "))
}

radix_sort(arr)