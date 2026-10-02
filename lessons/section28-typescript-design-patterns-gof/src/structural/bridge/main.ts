/*
Nesta aula prática, aplicamos o padrão de projeto Bridge desenvolvendo um sistema de controles remotos e dispositivos de áudio/vídeo. Acompanhamos como a composição permite separar a Abstração (controles) da Implementação (dispositivos) para que ambas evoluam sem acoplamento rígido.
*/

import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume as RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

export function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower(); // Chamada permitida diretamente: método comum presente na união dos tipos

  // Type Guard (in operator)
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // + 10 (20)
  abstraction.volumeUp(); // + 10 (30)
  abstraction.volumeUp(); // + 10 (40)
  abstraction.volumeDown(); // - 10 (30)
}

// Execução Prática e Demonstração do Comportamento

// TV
const tv = new Tv();
const tvRemoteControl = new RemoteControl(tv);
const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv);

clientCode(tvRemoteControl);
clientCode(tvRemoteControlWithVolume);

// RADIO
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio);

clientCode(radioRemoteControl);
clientCode(radioRemoteControlWithVolume);
