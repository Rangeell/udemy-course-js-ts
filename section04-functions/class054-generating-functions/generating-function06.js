/*
Funções Geradoras:
    - Exemplo com return
*/
function* geradora() {
    yield function () {
        console.log('Vim do y1')
    }

    return function () {
        console.log('Vim do return')
    }
    // ...

    yield function () {
        console.log('Vim do y2')
    }
}
const g = geradora()
const func1 = g.next().value
const func2 = g.next().value
// const func3 = g.next().value
func1()
func2()
// func3()
