// 01/01/1970 Time unix ou época unix

const data = new Date()
console.log(`Dia da semana: ${data.getDay()}`) // 0 - Domingo, 6 - Sábado
console.log(`Dia do mês: ${data.getDate()}`)
console.log(`Mês: ${data.getMonth()}`) // 0 a 11
console.log(`Ano: ${data.getFullYear()}`)
console.log(`Horas: ${data.getHours()}`)
console.log(`Minutos: ${data.getMinutes()}`)
console.log(`Segundos: ${data.getSeconds()}`)
console.log(`Milisegundos: ${data.getMilliseconds()}`)
console.log(`Secundos: ${data.getSeconds()}`)