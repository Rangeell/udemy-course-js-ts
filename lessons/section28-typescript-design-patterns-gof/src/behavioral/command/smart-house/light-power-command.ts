/*
Os comandos concretos implementam a interface `SmartHouseCommandProtocol`, mantêm uma referência para o receptor (receiver) concreto correspondente e delegam o trabalho para ele.

`LightPowerCommand` é o comando responsável por alternar a energia da lâmpada. Ao executar (`execute`), ele liga a luz. Ao desfazer (`undo`), ele desliga a luz.
*/

import type { SmartHouseCommandProtocol } from './smart-house-command-protocol';
import type { SmartHouserLight } from './smart-house-light';

export class LightPowerCommand implements SmartHouseCommandProtocol {
  // Recebe um Receiver (Dependency Injection)
  constructor(private readonly receiver: SmartHouserLight) { }

  execute(): void {
    this.receiver.on(); // Delega para o Receiver
  }
  undo(): void {
    this.receiver.off(); // Delega para o Receiver
  }
}
