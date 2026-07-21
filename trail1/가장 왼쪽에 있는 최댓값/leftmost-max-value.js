const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(" ").map(Number)

let idx = n - 1


/* 
1. 배열을 idx부터 0까지 거꾸로 순회함
2. 배열을 순회 하면서 최대값을 구함 , 최대값을 구하면서 인덱스도 저장
3. 배열을 모두 순회한뒤에 구한 인덱스를 정답 배열에 push함
4. 구한 인덱스에 1을 뺀뒤에 그 값을 idx에 넣음
5. idx가 0이되면 break
*/

let answer = []

while (true) {

    let max = -1
    let find = -1

    if (idx < 0) break


    for (let i = idx; i >= 0; i--) {
        if (arr[i] >= max) {
            max = arr[i]
            find = i
        }
    }
    answer.push(find + 1)
    idx = find - 1
}


console.log(answer.join(" "))