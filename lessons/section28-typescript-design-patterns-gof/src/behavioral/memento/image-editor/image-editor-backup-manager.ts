/*
A classe `ImageEditorBackupManager` desempenha o papel de Caretaker. Sua função exclusiva é gerenciar o ciclo de vida e a custódia da pilha de mementos gerados pelo `ImageEditor`. O Caretaker não acessa, inspeciona ou modifica o estado mantido nos mementos.

O Caretaker mantém uma lista privada de mementos (`private mementos: Memento[] = []`) e recebe o Originador via injeção de dependência no construtor.

A estrutura de dados utilizada para o histórico é uma pilha LIFO (Last In, First Out) o snapshot mais recente capturado é o primeiro a ser desempilhado e restaurado em uma operação de desfazer.

Métodos:
  - `backup(): void`: Invoca `imageEditor.save()`, armazena o `Memento` retornado no topo da pilha através de `push()` e emite um log operacional.
  - `undo(): void`: Remove o memento do topo da pilha com `pop()`. Aplica uma verificação defensiva para pilha vazia (`if (!memento) return;`). Existindo o snapshot, ele o repassa ao método `imageEditor.restore(memento)` e loga a restauração do backup informando seu nome legível (`getName()`).
  - `showMementos(): void`: Itera sobre a pilha de mementos e exibe o histórico de snapshots armazenados no console.
*/

import type { ImageEditor } from './image-editor';
import type { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly originator: ImageEditor) { }

  backup(): void {
    console.log('Backup: salvando o estado de ImageEditor.');
    this.mementos.push(this.originator.save());
  }

  undo(): void {
    const memento = this.mementos.pop(); // Remove e retorna o último elemento da pilha

    if (!memento) {
      console.log('Backup: no mementos');
      return;
    }

    this.originator.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso!`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
