// PERCORRER ARRAYS

const fruits = ['Morando', 'Uva', 'Abacaxi', 'Manga', 'Pêssego']

// i = index (boa prática)
for (let i = 0; i < fruits.length; i++) {
    console.log(`Índice ${i}: ${fruits[i]}`)
}

console.log('Segunda maneira ⬇')
for (let i in fruits) {
    console.log(fruits[i])
}