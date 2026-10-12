/*
O Invocador (Invoker) é responsável por armazenar e disparar os comandos. Ele não sabe o que o comando faz internamente nem qual receptor está sendo modificado.

A classe `SmartHouseApp` representa a aplicação/controle remoto da casa inteligente:
  - Mapeia botões/chaves (`string`) para objetos `SmartHouseCommand`.
  - Mantém um histórico de chamadas em uma pilha para permitir operações de Undo.
*/

import type { SmartHouseCommandProtocol } from './smart-house-command-protocol';

export class SmartHouseApp {
  private commands: { [key: string]: SmartHouseCommandProtocol } = {};

  // Adiciona um novo comando no dicionário (recebe uma chave como id e o comando em si)
  addCommand(key: string, command: SmartHouseCommandProtocol): void {
    this.commands[key] = command; // Bracket Notation
  }

  // Executa um determinado comando com base no id recebido
  executeCommand(key: string): void {
    if (this.commands[key]) {
      this.commands[key].execute();
    }
  }

  // Desfaz um determinado comando com base no id recebido
  undoCommand(key: string): void {
    if (this.commands[key]) {
      this.commands[key].undo();
    }
  }
}
