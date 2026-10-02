/*
A classe de abstração base guarda a ponte de composição para o dispositivo genérico e expõe operações elementares de controle.

Nessa classe precisamos de uma propriedade que diga para qual dispositivo (device) ele vai delegar a ação.
*/

import type { DeviceImplementationProtocol } from '../device/device-implementation-protocol';

export class RemoteControl {
  constructor(protected readonly device: DeviceImplementationProtocol) { }

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(`${this.device.getName()} power status: ${this.device.getPower()}`);
  }
}
