/*
O teste definitivo de um Singleton é verificar se alterações feitas em um ponto do sistema refletem em outro.
*/

import { MyDataBaseIIFE } from '../../db/my-database-iife';

//// Executa o código do módulo a -> permite que tudo que exista no módulo a passe para toda a aplicação
import { db as dbFromModuleA } from './module-a';

const db = MyDataBaseIIFE; // Não precisamos da instância

db.add({ name: 'Roberta', age: 24 });
db.add({ name: 'Joana', age: 25 });
db.add({ name: 'Luíza', age: 28 });
db.show(); // Temos todos os usuários definidos tanto no module A quanto no Moduel B

console.log(db === dbFromModuleA);
