const fruits = ['Morango', 'Uva', 'Abacaxi']

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i}: ${fruits[i]}`)
}

console.log('###')

for (let i in fruits) {
    console.log(`Fruta ${i}: ${fruits[i]}`)
}

console.log('###')

let i = 0
for (let v of fruits) {
    console.log(`Fruta ${i}: ${v}`)
    i++
}

console.log('###')

fruits.forEach(function(v, i, array){
    console.log(`Fruta ${i}: ${v}`)
    console.log(array)
})