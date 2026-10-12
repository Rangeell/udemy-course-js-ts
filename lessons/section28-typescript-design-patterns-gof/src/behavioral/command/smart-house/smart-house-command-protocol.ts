/*
A interface `SmartHouseCommand` estabelece o contrato comum que todos os comandos concretos da casa inteligente devem seguir.
*/

export interface SmartHouseCommandProtocol {
  execute(): void;
  undo(): void;
}
