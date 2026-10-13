/*
A classe `ConcreteMemento` materializa o snapshot imutável do estado do editor. Ela implementa a  `Memento` e armazena os valores reais do Originador no momento em que a cópia de segurança foi requisitada.

A imutabilidade é assegurada pela combinação de visibilidade 03.private|privada e o modificador readonly em todas as suas propriedades. Uma vez instanciado pelo Originador, o `ConcreteMemento` proíbe qualquer alteração em seu estado interno.

A classe divide seus métodos em duas superfícies distintas:

  - Interface Estreita (Pública): Os métodos `getName()` e `getDate()`, declarados na Interface `Memento`, que podem ser consumidos por qualquer agente do sistema (como o Caretaker).
  - Interface Larga (Interna ao Originador): Os métodos `getFilePath()` e `getFileFormat()`, que fornecem os dados necessários para que o Originador restabeleça suas propriedades internas.
*/

import type { Memento } from './memento';

export class ConcreteMemento implements Memento {
  constructor(
    private name: string,
    private date: Date,
    private filePath: string,
    private fileFormat: string,
  ) { }

  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getFilePath(): string {
    return this.filePath;
  }

  getFileFormat(): string {
    return this.fileFormat;
  }
}
