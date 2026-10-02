/*
Extende a abstração `RemoteControl` adicionando métodos de manipulação de volume de mais alto nível.
*/

import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {

  // Aumenta o volume de 10 em 10
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);

    console.log(`${this.device.getName()} tinha o volume ${oldVolume} agora tem ${this.device.getVolume()}`);
  }

  // Reduz o volume de 10 em 10
  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);

    console.log(`${this.device.getName()} tinha o volume ${oldVolume} agora tem ${this.device.getVolume()}`);
  }
}
