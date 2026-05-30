// WHILE - RANDOM NUMBER

function random(min, max) {
    const n = Math.random() * (max - min) + min
    return Math.round(n)
}

const min = 1
const max = 50
let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}
