//* Optional Chaining
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // Não enviamos a data
};

//! console.log(documento.data) -> undefined.
//! console.log(documento.data.toDateString()) -> ERRO em run time -> Chamando método em cima de undefined.

// Se der undefined, o método não é chamado, retorna undefined sem quebrar a aplicação.
console.log(documento.data?.toDateString());

/*
*Nullish Coalescing
- Esse operador é resposável por checar se o valor esquerdo a ele é um "não valor" (null / undefined). Se for null ou undefined, o lado direito da expressão é executada.

! OBS: "Não valor" (null / undefined) != de "Falsy Value" (false, string vazia, null, undefined, 0)
*/

type Documento2 = {
  titulo: Documento['titulo'];
  texto: Documento['texto'];
  data?: Documento['data'];
}

const documento2: Documento2 = {
  titulo: 'O título2',
  texto: 'O texto 2',
  // Não enviamos a data
};

console.log(documento.data?.toDateString() ?? 'Não existe dado.');
console.log(undefined ?? '2-Não existe dado.'); // Retorna '2-Não existe dado.'
console.log(null ?? '3-Não existe dado.'); // Retorna '3-Não existe dado.'
console.log(false ?? '4-Não existe dado.'); // Retorna false, pois é considerado um valor booleano
console.log(0 ?? '5-Não existe dado.'); // Retorna 0, pois é considerado um valor
console.log('' ?? '6-Não existe dado.'); // Retorna string vazia, pois é considerado um valor
