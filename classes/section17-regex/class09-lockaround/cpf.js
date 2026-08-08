const cpf = `
012.250.796-10
111.111.111-11
999.999.999-99
555.555.555-55
aaa.bbb.ccc-dd
147.285.963-10
`

/*
Capturamos apenas com cpfs válidos (não sequência), usando negative lookahead

Expressão: (?!(\d)\1{2}\.\1{3}\.\1{3}-\1{2})
    - (\d) -> Criamos um grupo que considera números de 0-9 para servir como backreference
    - \1{2}\. -> Repetimos esse grupo 2 vezes -> Obtemos os 3 primeiros digitos "111."
    - \1{3}\. -> Repetimos esse grupo mais 3 vezes -> Obtemos os 3 segundos digitos "111."
    - \1{3}- -> Repetimos esse grupo mais 3 vezes -> Obtemos os 3 terceiros digitos "111-"
    - \1{2} -> Repetimos esse grupo mais 3 vezes -> Obtemos os 2 últimos digitos "11"
*/
console.log(cpf.match(/^(?!(\d)\1{2}\.\1{3}\.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}-\d{2}$/gm))