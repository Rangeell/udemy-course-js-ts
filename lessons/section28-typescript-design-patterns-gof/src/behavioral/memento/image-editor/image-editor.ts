/*
A classe `ImageEditor` atua como o Originador no padrão Memento. Ela detém a lógica de negócio do domínio de imagem e é a única entidade autorizada a criar instâncias de `ConcreteMemento` e a ler suas propriedades internas para restauração.

O editor encapsula duas propriedades fundamentais: `filePath` e `fileFormat`. O construtor recebe e inicializa ambos os atributos.

  - O método `convertFormat(format: string): void` altera o estado interno do editor. Ele atualiza o formato e reestrutura o caminho do arquivo.

  - `save(): Memento`: Instancia e retorna um novo `ConcreteMemento` contendo uma fotografia exata do estado atual do editor.

  - `restore(memento: Memento): void`: Recebe uma referência do tipo abstrato `Memento` e restaura o estado do editor. Para acessar a interface larga do snapshot (`getFilePath` e `getFileFormat`), o método realiza a coerção de tipo (type assertion) para `ConcreteMemento`:
*/

import { ConcreteMemento } from './concrete-memento';
import type { Memento } from './memento';

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) { }

  convertFormatTo(format: string): void {
    this.fileFormat = format;

    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat);
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
