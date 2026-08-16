const body1 = document.querySelector('body'); // Pode retornar -> HTMLBodyElement | null
body1.style.background = 'blue'; //! Erro -> "'body' é possivelmente 'null'."

//* Formas de evitar esse erro:

//* PRÁTICAS RECOMENDADAS
/*
Refinamento por condicional ->
  - if -> Estreitamento de tipo (Type Narrowing) ->
  - Checa se o elemento existe antes de acessar suas propriedades
  * Prática recomendada quando não temos certeza se o elemento de fato vai existir na tela a todo momento
*/
const body2 = document.querySelector('body');
if (body2) body2.style.background = 'red';

/*
Type Ascention ->
  - as Element ->
  - Converte de 'Element | null' para o elemento HTML específico
  * Prática mais utilizada e recomendada (RECOMENDADO quando se tem CERTEZA se o elemento vai existir na tela)
*/
const body4 = document.querySelector('body') as HTMLBodyElement; // Type Ascention
body4.style.background = 'red';

// HTMLElement -> pai de todos os elementos HTML
// Selecionando input
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'Valor'; // Auxílio do autocompleto do VSCode
input.focus();

//! PRÁTICAS NÃO RECOMENDADAS
/*
Non-null Assertion -> ! -> Diz que o objeto não vai ser nulo em nenhum momento no código
*/
const body3 = document.querySelector('body')!; // Non-null Assertion
body3.style.background = 'red';

/*
Type Assertion (subtipos)

Se precisarmos que um elemento tenha um tipo do qual ele não é compatível, precisaremos "subir" na cadeia de tipos do Typescript, poir atribuir diretamente body como um number, por exemplo, daria erro:

! A conversão do tipo 'HTMLBodyElement | null' para o tipo 'number' pode ser um erro porque nenhum tipo está suficientemente sobreposto ao outro. Se isso era intencional, converta a expressão para 'unknown' primeiro.
  ! O tipo 'HTMLBodyElement' não pode ser comparável ao tipo 'number'.
*/

const body5 = (document.querySelector('body') as unknown) as number; // Agora body tem o tipo number

