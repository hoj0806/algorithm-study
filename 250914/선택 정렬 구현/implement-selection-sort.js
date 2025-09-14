const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


function selection_sort(arr) {
    let len = arr.length
    for(let i = 0; i < len -1; i++) {
        let minimum = i

        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minimum]) {
                minimum = j
            }

            if(minimum !== i) {
                 let tmp = arr[i]
                 arr[i] = arr[minimum]
                 arr[minimum] = tmp
            }
           
        }
    } 
    console.log(arr)
}

selection_sort(arr)