/*
Nesta aula prática, aplicamos o padrão de projeto Memento desenvolvendo um editor de imagens fictício (`ImageEditor`) capaz de salvar e restaurar seus estados internos (como o formato e o caminho do arquivo) através de backups sem expor ou violar o seu encapsulamento.
*/

import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup(); // Salva o estado atual
imageEditor.convertFormatTo('gif'); // Altera o estado

backupManager.backup(); // Salva o estado atual
imageEditor.convertFormatTo('bmp'); // Altera o estado

backupManager.backup(); // Salva o estado atual
imageEditor.convertFormatTo('jpg'); // Altera o estado

console.log(imageEditor); // jpg

backupManager.undo(); // Desfaz alteração
console.log(imageEditor); // Volta para o estado anterior -> bmp

backupManager.undo(); // Desfaz alteração
console.log(imageEditor); // Volta para o estado anterior -> gif

backupManager.undo(); // Desfaz alteração
console.log(imageEditor); // Volta para o estado anterior -> png

backupManager.undo(); // Desfaz alteração
console.log(imageEditor); // Volta para o estado anterior -> "No mementos"
