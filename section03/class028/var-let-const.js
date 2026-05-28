const verdadeira = true

// let tem escodpo de bloco { ... }
// var só tem escopo de função

let name = 'Breno' // Criando variável
var name2 = 'Breno'

if (verdadeira) {
    let name = 'Rangel' // Criando  outra variável
    var name2 = 'Rogério' // Redeclarando

    if (verdadeira) {
        let name = 'Outra coisa' // Criando outra variável
        var name2 = 'Ronaldo' // Redeclarando
    }

}
console.log(name, name2)
