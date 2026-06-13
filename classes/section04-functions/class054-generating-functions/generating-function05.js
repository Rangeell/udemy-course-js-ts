/*
Funções Geradoras que delegam funções para outras Funções Geradoras
    Exemplo com funções
*/

function* geradora() {
    yield function () {
        console.log('Vim do y1')
    }
    // ...

    yield function () {
        console.log('Vim do y2')
    }
}
const g = geradora() 
const func1 = g.next().value
const func2 = g.next().value
func1()
func2()
