/*
Define o contrato genérico de baixo nível que todo e qualquer dispositivo eletrônico deve satisfazer para ser operado através das abstrações de controle.

Optamos por usar getters e setters da maneira comum de todas as linguagens ao invés de usar a sintaxe exclusiva do JavaScript.
*/

export interface DeviceImplementationProtocol {
  getName(): string;
  getVolume(): number;
  getPower(): boolean;

  setVolume(volume: number): void;
  setPower(powerStatus: boolean): void;
}
