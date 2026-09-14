/*
IIFE -> Immediately Invoked Function Expression
    - São funções que são executadas e invocadas imediatamente
    - Elas protegem o nosso código do escopo globol, além de evitar poluí-lo
*/

(function(idade, peso, altura) {
    const surname = 'Rangel'
    function createName(name) {
        return `${name} ${surname}`
    }

    function falaNome() {
        console.log(createName('Breno'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(23, 80, 1.80)
