/*
O tipo "any" representa uma falta de tipo ou "qualquer tipo"

Normalmente não queremos esse tipo no nosso código, pois pode afetar a integridade promovendo falhas segurança / tipagem

Utilize "any" apenas em último caso
*/

/* eslint-disable */
function showMessage(msg: any) { //
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.warn(showMessage('Olá'));
console.log(showMessage(2));
