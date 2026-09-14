// VERIFICAR SE NÚMERO É PAR

// i = index (boa prática)
for (let i = 0; i <= 6; i++) {
   const par = i % 2 === 0 ? 'par': 'ímpar'
    console.log(`O número ${i} é ${par}`)
}