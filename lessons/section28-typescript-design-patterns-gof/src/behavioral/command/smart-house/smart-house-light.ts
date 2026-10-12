/*
Os receptores são as classes que contêm a lógica de negócio real e o estado dos dispositivos físicos da casa inteligente.

A classe `SmartHouseLight` representa uma lâmpada inteligente (Receiver). Ela gerencia o estado de energia (`isOn`), o nível de intensidade de iluminação (`intensity`, variando de 0 a 100) e o seu nome de identificação.
*/

// Receiver
export class SmartHouserLight {
  private isOn = false;
  private intensity = 50; // de 0 a 100

  constructor(public name: string) { }

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;

    console.log(`${this.name} agora está ${this.getPowerStatus()}!`);

    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;

    console.log(`${this.name} agora está ${this.getPowerStatus()}!`);

    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;

    this.intensity += 1;

    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;

    this.intensity -= 1;

    return this.intensity;
  }
}
