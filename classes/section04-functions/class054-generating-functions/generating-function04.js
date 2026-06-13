// Funções Geradoras que delegam funções para outras Funções Geradoras

function* geradora1() {
    yield 0
    yield 1
    yield 2
}

function* geradora2() {
    yield* geradora1()
    yield 3
    yield 4
    yield 5
}

const g2 = geradora2()
for (let v of g2) {
    console.log(v)
}