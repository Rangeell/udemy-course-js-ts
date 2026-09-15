/*
Classe responsável exclusivamente pelo envio de mensagens/notificações.

Agora nossa classe tem apenas um método, tem problema? Não, Quanto menor a classe e mais específica para uma função ela for (Single Responsability Principle), mais fácil fica a manutenção.

Mas é interessante avaliar se, no código/projeto em questão, se faz sentido continuar sendo uma classe ou se seria melhor ser apenas uma função.

* Classificação: Classe Concreta de alto nível quando comparada com `MessagingProtocol`
*/

import type { MessagingProtocol } from '../interfaces/messaging-protocol.js';

// Classe Concreta que depende de uma abstação (DIP)
export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }
}
