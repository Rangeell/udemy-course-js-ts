// Funções Recursivas

function recursive(n) {
    if (n > 10) return
    console.log(n)
    n++
    recursive(n)
}
recursive(0)