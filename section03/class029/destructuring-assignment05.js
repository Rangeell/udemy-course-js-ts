const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Forma tradicional
const seven = numbers[2][0]
// Forma moderna simples
const[list1, ,list3] = numbers


// Forma complexa
const [[, two], list2, [, , nine]] = numbers
const one = list1[0]
const six = list2[2]

console.log(numbers)
console.log(`listas: ${list1} - ${list2} - ${list3}`)
console.log(one)
console.log(two)
console.log(six)
console.log(seven)
console.log(nine)