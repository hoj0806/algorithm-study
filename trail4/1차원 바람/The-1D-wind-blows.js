const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(' ').map(Number);
const building = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const winds = input.slice(1 + n, 1 + n + q).map(line => {
    const [r, d] = line.split(' ');
    return [Number(r), d];
});




// 왼쪽으로 미는 함수, 오른쪽으로 미는 함수, 두 배열을 비교하는 함수

function left(idx) {
    let row = building[idx]
    let temp = row[m - 1]
    for (let i = m - 1; i >= 1; i--) {
        row[i] = row[i - 1]
    }
    row[0] = temp
}

function right(idx) {
    let row = building[idx]
    let temp = row[0]
    for (let i = 0; i < m - 1; i++) {
        row[i] = row[i + 1]
    }
    row[m - 1] = temp
}

function arrCheck(arr1, arr2) {
    for (let i = 0; i < m; i++) {
        if (arr1[i] === arr2[i]) {
            return true
        }
    }
    return false
}

winds.forEach(w => {
    let [num, direct] = w

    num = Number(num)
    num -= 1
    let upDirect = direct
    let downDirect = direct

    // 빌딩에 direct-1 행부터 바람이 불기 시작
    if (direct === 'L') {
        left(num)
    } else if (direct === "R") {
        right(num)
    }

    // 윗층처리
    for (let i = num; i >= 1; i--) {
        let arr1 = building[i]
        let target = building[i - 1]
        if (arrCheck(arr1, target)) {
            if (upDirect === 'L') {
                right(i - 1)
                upDirect = 'R'
            } else {
                left(i - 1)
                upDirect = 'L'
            }
        } else {
            break
        }
    }

    // 아랫층 처리
    for (let i = num; i < n - 1; i++) {
        let arr1 = building[i]
        let target = building[i + 1]
        if (arrCheck(arr1, target)) {
            if (downDirect === 'L') {
                right(i + 1)
                downDirect = 'R'
            } else {
                left(i + 1)
                downDirect = 'L'
            }
        } else {
            break
        }
    }
})

building.forEach(row => console.log(row.join(" ")))