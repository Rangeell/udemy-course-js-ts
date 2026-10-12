/*
Os comandos concretos implementam a interface `SmartHouseCommandProtocol`, mantêm uma referência para o receptor (receiver) concreto correspondente e delegam o trabalho para ele.

`LightIntensityCommand` é o comando responsável por ajustar a intensidade da luz. O método `execute` aumenta a intensidade, enquanto o método `undo` a diminui.
*/

import type { SmartHouseCommandProtocol } from './smart-house-command-protocol';
import type { SmartHouserLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommandProtocol {
  constructor(private readonly receiver: SmartHouserLight) { }

  execute(): void {
    const intensity = this.receiver.increaseIntensity();
    console.log(`Intensidade de ${this.receiver.name}: ${intensity}`);
  }

  undo(): void {
    const intensity = this.receiver.decreaseIntensity();
    console.log(`Intensidade de ${this.receiver.name}: ${intensity}`);
  }
}
