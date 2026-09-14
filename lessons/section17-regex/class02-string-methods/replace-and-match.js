/*
Quando a RegEx contém grupos definidos por parênteses, podemos reutilizar os valores capturados no segundo argumento através da sintaxe $1, $2, etc.

Os números dos grupos correspondem à ordem em que os parênteses de abertura `(` aparecem no padrão:
    Regex: /(Grupo 1 (Grupo 2)) (Grupo 3)/
        - $1: Todo o conteúdo do primeiro grupo externo.
        - $2: O grupo interno aninhado.
        - $3: O próximo grupo na sequência.
*/

/*
O método '.replace()' permite passar uma função como segundo argumento. Essa função é executada para cada ocorrência encontrada, recebendo o termo capturado e retornando a string modificada.
*/

const { text } = require('../base');
const regExp1 = /João|Maria/gi;
console.log(text)

// Encontra todas as ocorrências e retorna um array com todos o valores encontrados.
console.log(text.match(regExp1));

// Substitui todas as ocorrências por 'Felipe' (ignorando maiúsculas e minícusculas).
console.log(text.replace(/João/gi, 'Felipe'))

// Substitui todas as ocorrências (João e Maria) por 'Felipe' (ignorando maiúsculas e minícusculas).
console.log(text.replace(/João|Maria/gi, 'Felipe'))

// Adiciona uma tag HTML em cada ocorrência dentro do primeiro grupo.
console.log(text.replace(/(João|Maria)/gi, '<b>$1</b> '))

// Para cada ocorrência encontrada (João ou Maria), converte para letras maiúsculas.
console.log(text.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
}));