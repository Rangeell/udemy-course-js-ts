/*
Protocolo responsável por informar que todo objeto que o implementar tem pelos menos esses deteminados métodos.

Ao retornar `this` em cada método, implementamos uma Fluent Interface (encadeamento de métodos). Além de tornar o código mais legível e semântico, isso eleva drasticamente a DX (Development Experiense), fornecendo um fluxo lógico de auto-complete na IDE e reduzindo a carga cognitiva do desenvolvedor ao montar pedidos complexos.
*/

export interface MealBuilderProtocol {
  makeMeal(): this;
  // makeBeverage?(): this;
  // makeDessert?(): this;
}
