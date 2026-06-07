const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

for (let i = 1; i <= n; i++) {
    let star = ''


    for (let j = 1; j <= n; j++) {
        if (i === 1) {
            star += "* "
        } else if (j % 2 === 0) {
            if (i <= j) {
                star += "* "
            } else {
                star += "  "
            }
        } else {
            star += "  "
        }



    }
    console.log(star)

}






// 맨위 맨아래 기본적으로 전부 찍고 i > j 이지만 i아 홀수있떄만 찍게