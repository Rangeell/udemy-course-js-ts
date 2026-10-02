import type { DeviceImplementationProtocol } from './device-implementation-protocol';

export class Radio implements DeviceImplementationProtocol {
  private name = 'Radio';
  private volume = 10;
  private power = false;

  getName(): string {
    return this.name;
  }

  getVolume(): number {
    return this.volume;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) return;

    this.volume = volume;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
}
