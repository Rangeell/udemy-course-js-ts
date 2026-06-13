//               0    1   2   3   4   5   6   7   8 
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [one, , three, , five, , seven, ...rest] = numbers
console.log(one, three, five, seven)
console.log(rest)
console.log(numbers)